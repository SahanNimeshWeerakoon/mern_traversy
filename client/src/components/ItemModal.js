import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { addItem } from '../actions/itemActions'

class ItemModal extends Component {
    
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { name } = this.state

        const newItem = {
            id: uuid(),
            name
        }

        this.props.addItem(newItem)

        //Close Modal
        this.toggle()
    }

    render() {
        return (
            <div className="item-modal">
                <Button
                    color="dark"
                    style = {{marginBottom: '2rem', marginLeft: '1rem'}}
                    onClick = {this.toggle}
                >
                    Add Item
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}> Add Item To Shopping List </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add New Item To Shopping List"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                >
                                    Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal)