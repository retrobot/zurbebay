<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// echo getcwd() ;

function latest_file($path, $pattern) {
    $files = glob($path."/".$pattern); // + glob($path."/*.jpg");
    $files = array_combine($files, array_map("filemtime", $files));
    arsort($files);
    $latest_file = key($files);
    return $latest_file;
}

function copyfile($filename, $datapath) {
    $file = $filename;
    $newfile = $datapath . "/"; //.'/latest.xml' .":END";
    if (!copy($file, $newfile)) {
        echo "failed to copy $file...\n";
    }
}

function stream_copy($src, $dest) 
{ 
    $fsrc = fopen($src,'r'); 
    $fdest = fopen($dest,'w+');
    if (!stream_copy_to_stream($fsrc,$fdest)) {
        echo "FAILED!!!";
    }
    $len = stream_copy_to_stream($fsrc,$fdest); 
    fclose($fsrc); 
    fclose($fdest); 
    return $len; 
} 

function stream_appender($src, $dest) 
{ 
    // $files = glob($path."/".$pattern); // + glob($path."/*.jpg");
    $fdest = fopen($dest,'w+');
    fwrite($fdest, '<latest_all>');
        
    $files = glob($src); // + glob($path."/*.jpg");
    foreach ($files as $key => $value) {
        // echo "ANOTHER ONE";
        // echo "KEY:".$key . "VAL:" . $value;
        $fsrc = fopen($value,'r');
        if (!stream_copy_to_stream($fsrc,$fdest)) {
            echo "FAILED!!!";
        }
        fclose($fsrc);      
    }

    fwrite($fdest, '</latest_all>');
    fclose($fdest); 
    // file_put_contents("LLLL") 
    // $len = stream_copy_to_stream("<latest_all>",$fdest); 
    
    return "bs";//$len; 
} 

$datapath = "data/xml";
$dest_datapath = "data/latest";
$web_items_path = "data/xml/" . "WEB_ITEMS_*.*";

$latest_items = latest_file($datapath, "WEB_ITEMS_*.*");
$latest_avail = latest_file($datapath, "WEB_AVAIL_*.*");

$dest_file_items = $dest_datapath . "/latest_items.xml";
$dest_file_avail = $dest_datapath . "/latest_avail.xml";

// echo "SRC:" . $latest_items;
// echo "DEST:" . $dest_file_items;


stream_appender($web_items_path, $dest_file_items);
stream_copy($latest_avail, $dest_file_avail);

// Content printinh
// $content = file_get_contents($latest);
// echo $content;

?>