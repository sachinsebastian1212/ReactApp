import React, { Component } from 'react';
import data from './test.json';

var objectivesRetrieved = [{ "desc": "desc1", "val": "ob_77" }, { "desc": "desc2", "val": "ob_78" },
{ "desc": "desc3", "val": "ob_79" }, { "desc": "desc4", "val": "ob_80" }];
var rewardsRetrieved = [{ "desc": "reward1", "val": "qr_26" }, { "desc": "reward2", "val": "qr_31" },
{ "desc": "reward3", "val": "qr_32" }, { "desc": "reward4", "val": "qr_33" }];
var questActionTypeRetrived = ["Type1", "Type2", "Type3"];
var questActionRetrived = ["action1", "action2", "action3"];


var select_options = ["auto", "predefined"];

class QuestForm extends Component {

  render() {
    let nodes = data.map(function (arrelem) {
      return (
        <Node node={arrelem} children={arrelem.children} />
      );

    });

    return (
      <ol>
        {nodes}
      </ol>
    );
  }
}

class Node extends Component {

  render() {

    let childnodes = null;

    if (this.props.children) {
      childnodes = this.props.children.map(function (childnode) {
        return (
          <Node node={childnode} children={childnode.children} />
        );
      })
    }

    return (
      <li>
        <ol data-nodetype={this.props.node.type} className="test">
          <NodeElements data={this.props.node} />
          {childnodes ?
            <li><ol>{childnodes}</ol></li>
            : null}
        </ol>
      </li>
    );
  }
}


export default QuestForm;

// ref http://lyndseyb.co.uk/posts/creating-a-nested-listview-using-react


class NodeElements extends Component {
  render() {

    switch (this.props.data.type) {
      case "objective":
        return (
          <NodeElement>
            <li>
              <label htmlFor="">Select objective</label>
              <select>
                {objectivesRetrieved.map((obj) => <option value={obj.val}>{obj.desc}</option>)}
              </select>
            </li>
          </NodeElement>
        );
      case "objectivelist":
        return (
          <NodeElement>
            <li>
              <label htmlFor="">ObjectiveList creation</label>
              <select>
                {select_options.map((elem) => <option value={elem}>{elem}</option>)}
              </select>
            </li>
          </NodeElement>
        );
      case "quest":
        return (
          <NodeElement>
            <li>
              <label htmlFor="">Quest creation</label>
              <select>{select_options.map((elem) => <option value={elem}>{elem}</option>)}</select>
            </li>
            <li><label htmlFor="">Title</label><input data-type="title" type="text" name="title" id="" /></li>
            <li><label htmlFor="">Description</label><input data-type="description" type="text" name="description" id="" /></li>
            <li>
              <label htmlFor="">Reward</label>
              <select data-type="reward">{rewardsRetrieved.map((elem) => <option value={elem.val}>{elem.desc}</option>)}</select>
            </li>
            <li>
              <label htmlFor="">QuestActionType</label>
              <select data-type="questActionType">{questActionTypeRetrived.map((elem) => <option value={elem}>{elem}</option>)}</select>
            </li>
            <li>
              <label htmlFor="">QuestAction</label>
              <select data-type="questAction" >{questActionRetrived.map((elem) => <option value={elem}>{elem}</option>)}</select>
            </li>
          </NodeElement>
        );

      case "questset":

        return (
          <NodeElement>
            <li>
              <label htmlFor="">Quest creation</label>
              <select>{select_options.map((elem) => <option value={elem}>{elem}</option>)}</select>
            </li>
            <li>
              <label htmlFor="">Reward</label>
              <select data-type="rewardId">{rewardsRetrieved.map((elem) => <option value={elem.val}>{elem.desc}</option>)}</select>
            </li>
            <li><label htmlFor="">Difficulty</label><input data-type="difficulty" type="text" name="" id=""/></li>
            
          </NodeElement>
        );

      default:
        break;
    }

    return (
      <ol data-nodetype={this.props.type}>

      </ol>
    );
  }
}

function NodeElement(props) {
  return (
    props.children
  );
}