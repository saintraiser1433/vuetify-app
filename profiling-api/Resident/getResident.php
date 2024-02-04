<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow these methods for the preflight request (OPTIONS)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS,DELETE,PUT");

// Allow these headers for the preflight request (OPTIONS)
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
include '../conn.php';
// Sample data (you can replace this with a database connection or any other data source)
$action = $_GET['action'];
$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true);
switch ($action) {
    case 'GET':
        $sql = "SELECT * FROM resident";
        $rs = $conn->query($sql);
        $data = [];

        if ($rs) {
            while ($row = $rs->fetch_assoc()) {
                // Assuming your resident table has 'id', 'name', and 'age' columns
                $data[] = [
                    'resident_id' => $row['resident_id'],
                    'fname' => $row['fname'],
                    'mname' => $row['mname'],
                    'lname' => $row['lname'],
                    'suffix' => $row['suffix'],
                    'bdate' => $row['bdate'],
                    'age' => $row['age'],
                    'sex' => $row['sex'],
                    'religion' => $row['religion'],
                    'citizenship' => $row['citizenship'],
                    'status' => $row['status'],
                    'occupation' => $row['occupation'],
                    'cont_no' => $row['cont_no'],
                    'purok' => $row['purok'],
                    'address' => $row['address'],
                ];
            }
        }
        echo json_encode($data);
        break;
    case 'POST':
        // Assuming you pass the resident_id in the request
        $id = $data['resident_id'];
        $fname = $data['fname'];
        $mname = $data['mname'];
        $lname = $data['lname'];
        $suffix = $data['suffix'];
        $bdate = $data['bdate'];
        $citizen = $data['citizenship'];
        $age = $data['age'];
        $sex = $data['sex'];
        $religon = $data['religion'];
        $occupation = $data['occupation'];
        $contact = $data['cont_no'];
        $status = $data['status'];
        $voter = $data['purok'];
        $address = $data['address'];

        $query = "INSERT INTO resident (resident_id,fname,mname,lname,suffix,bdate,age,sex,religion,citizenship,status,occupation,cont_no,purok,address) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssssissssssss", $id, $fname, $mname, $lname, $suffix, $bdate, $age, $sex, $religon, $citizen, $status, $occupation, $contact, $voter, $address);
        $stmt->execute();
        if ($stmt) {
            echo json_encode(['message' => 'Resident added successfully']);
        } else {
            echo json_encode(['error' => 'Failed to add resident']);
        }
        break;
    case 'PUT':
        $resident_id = $data['resident_id'];
        $fname = $data['fname'];
        $mname = $data['mname'];
        $lname = $data['lname'];
        $suffix = $data['suffix'];
        $bdate = $data['bdate'];
        $citizen = $data['citizenship'];
        $age = $data['age'];
        $sex = $data['sex'];
        $religon = $data['religion'];
        $occupation = $data['occupation'];
        $contact = $data['cont_no'];
        $status = $data['status'];
        $voter = $data['purok'];
        $address = $data['address'];
        $sql = "UPDATE resident SET fname=?,mname=?,lname=?,suffix=?,bdate=?,age=?,sex=?,religion=?,citizenship=?,status=?,occupation=?,cont_no=?,purok=?,address=? where resident_id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssisssssssss", $fname, $mname, $lname, $suffix, $bdate, $age, $sex, $religon, $citizen, $status, $occupation, $contact, $voter, $address, $resident_id);
        $stmt->execute();

        if ($stmt) {
            echo json_encode(['message' => 'Resident updated successfully']);
        } else {
            echo json_encode(['error' => 'Failed to update resident']);
        }
        break;
    case 'DELETE':
        $resident_id = $_GET['id'];
        $sqlDelete = "DELETE FROM resident WHERE resident_id = '$resident_id'";
        $result = $conn->query($sqlDelete);

        if ($result) {
            echo json_encode(['message' => 'Resident deleted successfully']);
        } else {
            echo json_encode(['error' => 'Failed to delete resident']);
        }
        break;
}
