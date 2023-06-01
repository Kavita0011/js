<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./main_stylesheet/styles.css">
</head>

<body>

    <h1>Task number 12</h1>
    <?php

    // DATABASE CONNECTION
    // $con = mysqli_connect('sdb-57.hosting.stackcp.net', 'kavita-35303135deb5', '926ecse586', 'kavita-35303135deb5');
    // $con = mysqli_connect('localhost','root', '','kavita' );
    $con = mysqli_connect('localhost', 'root', 'infotech', 'kavita');

    ?>

    <!-- table to fetch data -->

    <table border=2px solid align="center">
        <tr>
            <th>Id</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Educational Qualifications</th>
            <th>Gender</th>
            <th>Skills</th>
            <th>State</th>
            <th>Country</th>
            <th>Address</th>

        </tr>
        <?php

        if (isset($_GET['page'])) {
            $page = $_GET['page'];
        } else {
            // by default page will be first
            $page = 1;
        }
        // total number of rows
        $total_rows = 5;
        // formula to find start limit
        $start_limit = ($page - 1) * $total_rows;
        //  query to fetch rows from table students start limit for starting limit and total rows for records 
        // number of rows 
        $query1 = "SELECT students.student_id, students.first_name, students.last_name, students.age, students.date_of_birth, students.educational_qualifications, students.gender, students.skill_id, states.state_name, countries.country_name, students.address FROM `students`
        JOIN skills ON students.skill_id =skills.skill_id 
        JOIN countries ON students.country_id=countries.country_id 
        JOIN states ON students.state_id=states.state_id
        ORDER BY students.student_id
        limit " . $start_limit . "," . $total_rows;


        $result = mysqli_query($con, $query1);
        //  to get the number of rows
        $ftch = mysqli_num_rows($result);
        // loop to print data from table per page
        while ($row = mysqli_fetch_assoc($result)) {
            // loop to fetch rows from table Student
            // query to fetch data
            $select_skill = "SELECT skill_name from skills where skill_id IN (" . ($row['skill_id']) . ")";
            $query2 = mysqli_query($con, $select_skill);
            $skill_names = "";
            while ($skill_row = mysqli_fetch_assoc($query2)) {
                $skill_names .= $skill_row['skill_name'] . " ";

            }
            echo "<tr>";
            echo "<td>" . $row['student_id'] . "</td>";
            echo "<td>" . $row['first_name'] . "</td>";
            echo "<td>" . $row['last_name'] . "</td>";
            echo "<td>" . $row['age'] . "</td>";
            echo "<td>" . $row['date_of_birth'] . "</td>";
            echo "<td>" . $row['educational_qualifications'] . "</td>";
            echo "<td>" . $row['gender'] . "</td>";
            echo "<td>" . $skill_names . "</td>";

            echo "<td>" . $row['state_name'] . "</td>";
            echo "<td>" . $row['country_name'] . "</td>";
            echo "<td>" . $row['address'] . "</td>";
            echo "</tr>";
        }
        ?>
    </table>
    <?php
    // to use pagination
    // query total number of records per page
    $query1 = "SELECT * FROM Student";

    $result = mysqli_query($con, $query1);
    // numbe of rows
    $ftch = mysqli_num_rows($result);
    // getting total number of pages
    $total_pages = ceil($ftch / $total_rows);
    ?>
    <!-- outer class conatining links of pages -->
    <div class="btn-outer-wrap">
        <?php

        if (!($page <= 1)) {
            ?>
  <span>
                <a class='linkbtn <?php echo $class; ?>' href="<?php echo 'task12.php?page=' . ($page - 1); ?>"> <?php echo "<"; ?></a>
       </span>
            <?php
        }




        // loop to create page 1,2,3 and 4
        for ($lnk = 1; $lnk <= 4; $lnk++) {
            // applying class current-page on currently active class 
            if ($page == $lnk) {
                $class = "current-page";
            } else {
                $class = "";
            }

            ?>

            <span class="btns">
                <a class='linkbtn <?php echo $class; ?>' href="<?php echo 'task12.php?page=' . $lnk; ?>"> <?php echo $lnk ?></a>
            </span>
            <?php
        }
        // condition will print next button except last page
        
        if (!($page >= 4)) {
            ?>
            <span>
                <a class='linkbtn <?php echo $class; ?>' href="<?php echo 'task12.php?page=' . ($page + 1); ?>"> <?php echo ">"; ?></a>

            </span>
            <?php
        }
        ?>
        </span>
    </div>
    <!-- closing database  connection -->
    <?php
    mysqli_close($con);
    ?>

</body>

</html>