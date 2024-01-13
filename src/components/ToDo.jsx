import React, { Component, createRef } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import html2canvas from 'html2canvas';


class ToDo extends Component {
    constructor(props) {
        super(props);

        this.taskListRef = createRef();

        this.state = {
            userInput: "",
            list: [],
            completedTasks: [],
            completed: false,
            showAlert: false,
            alertMessage: "",
            alertVariant: "",
        };
    }

    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                id: Math.random(),

                value: this.state.userInput,
            };

            const list = [...this.state.list];
            list.push(userInput);

            this.setState({
                list,
                userInput: "",
                showAlert: true,
                alertMessage: "Task Added successfully!",
                alertVariant: "primary",
            });

            setTimeout(() => {
                this.setState({
                    showAlert: false,
                });
            }, 2000);
        }
    }

    deleteItem(key) {
        const list = [...this.state.list];

        const updateList = list.filter((item) => item.id !== key);

        this.setState({
            list: updateList,
            showAlert: true,
            alertMessage: "Task deleted successfully!",
            alertVariant: "danger",
        });
        setTimeout(() => {
            this.setState({
                showAlert: false,
            });
        }, 2000);
    }

    editItem = (index) => {
        const todos = [...this.state.list];
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            let updatedTodos = [...todos]
            updatedTodos[index].value = editedTodo
            this.setState({
                list: updatedTodos,
                showAlert: true,
                alertMessage: "Task Updated Successfully!",
                alertVariant: "secondary",
            });

            setTimeout(() => {
                this.setState({
                    showAlert: false,
                });
            }, 2000);
        }
    }

    markAsDone = (index) => {
        const list = [...this.state.list];
        const completedTask = list.splice(index, 1)[0];
        completedTask.completed = true;

        const completedTasks = [...this.state.completedTasks];
        completedTasks.push(completedTask);

        this.setState({
            list,
            completedTasks,
            showAlert: true,
            alertMessage: "Task Marked as Done!",
            alertVariant: "success",
        });
        setTimeout(() => {
            this.setState({
                showAlert: false,
            });
        }, 2000);

    }

    resetList = () => {
        this.setState({
            list: [],
            completedTasks: [],
            showAlert: true,
            alertMessage: "List Reset Successfully!",
            alertVariant: "warning",
        });
        setTimeout(() => {
            this.setState({
                showAlert: false,
            });
        }, 2000);
    }

    getPhoto() {
        html2canvas(document.getElementById("completedTasks")).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = imgData;
            link.download = "completedTasks.png";
            link.click();
        });
    }


    // handleCloseAlert = () => {
    //     this.setState({
    //         showAlert: false,
    //     });
    // }

    render() {
        const { list, completedTasks } = this.state;
        const isResetDisabled = list.length === 0 && completedTasks.length === 0;

        // const { list, completedTasks, showAlert, alertMessage, alertVariant } = this.state;


        return (

            <Container className="bg-primary-subtle" style={{ height: "100vh" }}>

                <Row className="bg-danger-subtle p-3 text-success" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "5rem", fontWeight: "bolder", fontFamily: 'Fasthand, cursive' }}>

                    The Daily Checklist

                </Row>
                <hr />

                <div style={{ height: '70px' }}>
                    {this.state.showAlert && (
                        <Alert variant={this.state.alertVariant} onClose={this.handleCloseAlert} dismissible>
                            <strong>{this.state.alertMessage}</strong>
                        </Alert>
                    )}
                </div>

                <Row>
                    <Col md={{ span: 5, offset: 4 }}>

                        <InputGroup className="mb-2">

                            <FormControl className="bg-primary-subtle border-primary" style={{ borderRadius: '5px' }} placeholder="Add Tasks . . . " size="lg" value={this.state.userInput} onChange={(item) =>
                                this.updateInput(item.target.value)} />
                            <InputGroup>

                                <Button variant="success" className="mt-3" onClick={() => this.addItem()} >
                                    ADD
                                </Button>
                            </InputGroup>

                        </InputGroup>

                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 5, offset: 4 }}>

                        <ListGroup>

                            {this.state.list.map((item, index) => {
                                return (
                                    <div key={index} >

                                        <ListGroup.Item className='m-1' variant={item.completed ? "success" : "warning"} action style={{ display: "flex", justifyContent: 'space-between', border: '2px solid 	#CCCC00' }} >

                                            {item.value}

                                            <span>

                                                <Button style={{ marginRight: "10px" }}
                                                    variant="danger"
                                                    onClick={() => this.deleteItem(item.id)}>
                                                    Delete
                                                </Button>

                                                <Button variant="primary" style={{ marginRight: "10px" }}
                                                    onClick={() => this.editItem(index)}>
                                                    Edit
                                                </Button>

                                                {!item.completed && (
                                                    <Button
                                                        variant="success"
                                                        onClick={() => this.markAsDone(index)}
                                                    >
                                                        Done
                                                    </Button>
                                                )}

                                            </span>

                                        </ListGroup.Item>

                                    </div>
                                );
                            })}

                        </ListGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 5, offset: 4 }}>

                        <h4 className="mt-4">Completed Tasks:</h4>

                        <ListGroup>
                            {this.state.completedTasks.map((task) => (
                                <ListGroup.Item className='m-2' style={{ border: "2px solid green", borderRadius: '10px' }} key={task.id} variant="success">
                                    {task.value}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>

                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 5, offset: 4 }}>

                        {/* <Button variant="danger" className="mt-4" onClick={this.resetList} disabled={isResetDisabled}>
                            Reset List
                        </Button>

                        <Button variant="info" style={{ marginLeft: '25px' }} className="mt-4" onClick={this.handleGetPhoto} disabled={completedTasks.length === 0}>
                            Get Photo
                        </Button> */}

                        <Button
                            variant="danger"
                            className="mt-4"
                            onClick={this.resetList}
                            disabled={isResetDisabled}
                        >
                            Reset List
                        </Button>

                        {/* <Button
                            variant="primary"
                            className="mt-4 ml-2"
                            onClick={this.getPhoto}
                            disabled={this.state.completedTasks.length === 0}
                        >
                            Get Photo
                        </Button> */}

                    </Col>
                </Row>

            </Container>
        )
    }
}

export default ToDo;