import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RenderItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        changeItemProperty: PropTypes.func.isRequired,
        handler: PropTypes.any.isRequired,
        removeItem: PropTypes.func.isRequired
    };

    state = {
        collapse: true,
        disabled: this.props.item.type != "category",
        ...this.props.item
    };

    toggleCollapse = () => {
        this.setState({ collapse: !this.state.collapse });
    };

    onChange = (e, type) => {
        const newState = { ...this.props.item };
        newState[type] = e.target.value;
        newState.disabled = this.state.disabled;
        this.setState(newState, () => {
            delete newState.disabled;
            this.props.changeItemProperty(newState);
        });
    };

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading" onClick={this.toggleCollapse}>
                    <h3 className="panel-title">
                        {this.props.handler}
                        {this.props.item.label} ({this.state.type})
                    </h3>
                </div>
                <div
                    className={
                        "panel-collapse collapse" +
                        (!this.state.collapse ? " in" : "")
                    }
                >
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="custom-label">Name</label>
                            <input
                                value={this.state.name}
                                placeholder="Name to be displayed in the menu"
                                type="text"
                                className="form-control"
                                onChange={e => this.onChange(e, "name")}
                            />
                        </div>
                        {!this.state.disabled && (
                            <div className="form-group">
                                <label className="custom-label">Slug</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.slug}
                                    placeholder="Rewrite the slug"
                                    onChange={e => this.onChange(e, "slug")}
                                />
                            </div>
                        )}

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}
                        >
                            <i
                                className="fa fa-trash"
                                onClick={() =>
                                    this.props.removeItem(this.props.item)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
