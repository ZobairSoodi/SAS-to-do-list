<?php
include 'conn.php';

class Todolist {
    public $id;
    public $title;
    public $descrip;
    public $state;

    function __construct($id, $title, $descrip, $state){
        $this->id = $id;
        $this->title = $title;
        $this->descrip = $descrip;
        $this->state = $state;
    }

    function add_todo(){
        $add = "INSERT INTO list (title, descrip, state)
         VALUES ('$this->title', '$this->descrip', $this->state)";
        
        $GLOBALS['conn']->query($add);
    }

    function delete_todo(){
        $delete = "DELETE FROM list
         WHERE id = $this->id";
        $GLOBALS['conn']->query($delete);

    }

}


if(isset($_POST['submit'])){
    $todo_title = $_POST['title'];
    $todo_descrip = $_POST['descrip'];

    $todo = new Todolist(null, $todo_title, $todo_descrip, 0);
    $todo->add_todo();
}

if(isset($_POST['delete'])){
    $todo = new Todolist($_POST['id'], NULL, NULL, NULL);
    $todo->delete_todo();
}


?>