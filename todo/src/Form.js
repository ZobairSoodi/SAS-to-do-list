function Form() {
    return <div>
        <form action="http://localhost/sas-to-do-list/todo/php/crud.php" method="POST">
            <input type="text" name="title" />
            <input type="text" name="descrip" />
            <input type="submit" name="add" value="Add" />
        </form>
    </div>
}

export default Form;