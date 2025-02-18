import React from "react";
import { Media } from "reactstrap";
import { format } from "date-fns";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
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

  if (comments != 0) {
    return (
      <div>
        <h4>Comments</h4>
        <div>{commentsList}</div>
      </div>
    );
  } else return <div></div>;
}

const DishDetail = (props) => {
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
