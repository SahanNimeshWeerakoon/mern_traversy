import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import { getItems, deleteItem, addItem } from '../actions/itemActions'

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }
    
    render() {
        const { items } = this.props.item
        return (
            <div className="shopping-list">
                <Container>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            { items.map(({ id, name }) => (
                                <CSSTransition key={id} timeout={500} className="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={ this.onDeleteClick.bind(this, id) }
                                        >&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            )) }
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

ShoppingList.propTypes = {
    deleteItem: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem, addItem })(ShoppingList)