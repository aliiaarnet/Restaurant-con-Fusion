import React  from "react";
import { Media } from "reactstrap";
import { format } from "date-fns";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";



  function RenderDish({dish}) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  function RenderComments({comments}) { //maybe here should be {comments} instead of dish
    const comments = dish.comments;
    const commentsList = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <ul className="list-unstyled">
            <li className="media">
              <div className="media-body">
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author},{" "}
                  {format(new Date(comment.date), "MMM dd, yyyy")}
                </p>
              </div>
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <div>{commentsList}</div>
      </div>
    );
  }

  const DishDetail = (props) =>  {
    return (
      <div class="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            { //this.props.dish && this.renderDish(this.props.dish)
            }
            <RenderDish dish={props.dish} />
          </div>

          <div className="col-12 col-md-5 m-1">
            <RenderComments dish={props.dish} />
          </div>
        </div>
      </div>
    );
  }


export default DishDetail;
