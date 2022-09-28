<?php include 'conn.php' ?>

<?php
    class TodoList{
        public $id;
        public $title;
        public $descrip;
        public $state;

        function __construct($id,$title,$descrip,$state){
            $this->id = $id;
            $this->title = $title;
            $this->descrip = $descrip;
            $this->state = $state;
        }

        function get_todo(){
            $add = "SELECT * FROM list";
            $res = $GLOBALS["conn"]->query($add);
            $rows = [];
            if($res->num_rows > 0){
                while($row = $res->fetch_assoc()){
                    $rows[] = $row;
                }
            }
            return $rows;
        }

        function add_todo(){
            $add = "INSERT INTO list(title, descrip, state) VALUES(
                '$this->title','$this->descrip', $this->state
            )";
            $GLOBALS["conn"]->query($add);
        }
        function edit_todo(){
            $edit  = "UPDATE list SET
                title = '$this->title',
                descrip = '$this->descrip',
                state = $this->state
                WHERE id = $this->id
            ";
            $GLOBALS["conn"]->query($edit);
        }
        function delete_todo(){
            $delete = "DELETE FROM list WHERE
                id = $this->id
            ";
            $GLOBALS["conn"]->query($delete);
        }
    }

    if(isset($_POST["add"])){
        $title = $_POST["title"];
        $descrip = $_POST["descrip"];
        $new_obj = new TodoList(NULL, $title, $descrip, 0);
        echo $new_obj->title;
        $new_obj->add_todo();
    }

    if(isset($_POST["edit"])){
        $id = $_POST["id"];
        $title = $_POST["title"];
        $descrip = $_POST["descrip"];
        $state = $_POST["state"];
        $new_obj = new TodoList($id, $title, $descrip, $state);
        $new_obj->edit_todo();
    }

    if(isset($_POST["delete"])){
        $id = $_POST["id"];
        $new_obj = new TodoList($id, NULL, NULL, NULL);
        $new_obj->delete_todo();
    }

    if(isset($_GET["get_data"])){
        $new_obj = new TodoList(NULL,NULL,NULL,NUll);
        echo json_encode($new_obj->get_todo());
    }
?>
