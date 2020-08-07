package org.gradoop.demo.server;

import org.gradoop.demo.server.gen.io.swagger.model.KeysAndLabels;
import org.gradoop.demo.server.oldApi.RequestHandler;
import org.gradoop.temporal.io.impl.csv.TemporalCSVDataSource;
import org.gradoop.temporal.model.impl.TemporalGraph;
import org.gradoop.temporal.util.TemporalGradoopConfig;

import java.io.*;
import java.net.URL;

public class IOService {

    /**
     * File Name containing meta data of a graph
     */
    private static final String META_FILENAME = "/metadata";

    /**
     * Read Buffered Keys And Labels from disk
     *
     * @param databaseName
     * @return
     * @throws Exception exception if the reading does not work properly
     */
    public static KeysAndLabels readKeysAndLabelsFromDisk(String databaseName) throws Exception{
        FileInputStream fin = null;
        ObjectInputStream ois = null;
        try{
            String dataPath = RequestHandler.class.getResource("/data/" + databaseName).getFile();
            fin = new FileInputStream(dataPath+META_FILENAME);
            ois = new ObjectInputStream(fin);
            KeysAndLabels readKeys = (KeysAndLabels) ois.readObject();
            return readKeys;
        }
        catch(Exception e) {
            e.printStackTrace();
            throw e;
        } finally{
            try {
                if (fin != null) {
                    fin.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (ois != null) {
                    ois.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static TemporalGraph readGraph(String databaseName, TemporalGradoopConfig config) {
        URL resource = RequestHandler.class.getResource("/data/" + databaseName);
        String path = resource.getPath();
        TemporalCSVDataSource source = new TemporalCSVDataSource(path, config);
        return source.getTemporalGraph();
    }

    /**
     * Write KeysAndLabels to disk, buffer for later use.
     *
     * @param keysAndLabels
     * @param databaseName
     */
    public static void writeKeysAndLabelsToDisk(KeysAndLabels keysAndLabels, String databaseName){
        FileOutputStream fout=null;
        ObjectOutputStream oos=null;
        try {
            String dataPath = RequestHandler.class.getResource("/data/" + databaseName).getFile();
            fout = new FileOutputStream(dataPath + META_FILENAME);
            oos = new ObjectOutputStream(fout);
            oos.writeObject(keysAndLabels);
            oos.flush();
        } catch (IOException e) {
            e.printStackTrace();
            //Do not throw Error, but Meta file is not buffered!.
        } finally {
            try {
                if (fout != null) {
                    fout.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (oos != null) {
                    oos.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * Helper to check if a meta file for a graph was already saved to disk.
     *
     * @param dbName
     * @return
     */
    public static boolean metaFileExists(String dbName){
        URL meta = RequestHandler.class.getResource("/data/" + dbName + META_FILENAME);
        if(meta!=null){
            return true;
        }
        else{
            return false;
        }
    }
}
