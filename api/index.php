<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-type: application/json');

$zip = isset($_GET['zip']) ? (int)$_GET['zip'] : 0;

if ($zip <= 0) {
    print json_encode([
        'error' => 'Postal code invalid'
    ]);
    exit;
}

include_once('zips.php');

$zip = str_pad($zip, 5, "0", STR_PAD_LEFT);

if (isset($table[$zip])) {
    print json_encode($table[$zip]);
} else {
    print json_encode([
        'error' => 'Postal code does not exist'
    ]);
}

exit;