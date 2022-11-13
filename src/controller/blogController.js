import blogModel from "../model/blogModel.js";

class blogController {
  static index = (request, response) => {

    const page = request.query.page;
    
    blogModel.paginate({}, { limit: 8, page: page }, (err, data) => {
      if (err) return response.send({ error: "error to consult blog" });
      return response.json(data);
    });
  };

  static only = (request, response) => {
    const id = request.params.id;
    blogModel.findById(id, (err, data) => {
      if (!err) {
        return response.json(data);
      } else {
        response.status(500).send({ message: err.message });
      }
    });
  };

  static create = (request, response) => {
    let blog = new blogModel(request.body);

    blog.save((err) => {
      if (err) {
        response
          .status(500)
          .send({ message: `${err.message} - falha ao registrar artigo` });
      } else {
        response.status(201).send(blog.toJSON());
      }
    });
  };

  static update = (request, response) => {
    const id = request.params.id;
    blogModel.findByIdAndUpdate(id, { $set: request.body }, (err) => {
      if (!err) {
        response.status(200).send({ message: "artigo atualizado com sucesso" });
      } else {
        response.status(500).send({ message: err.message });
      }
    });
  };

  static addComment = (request, response) => {
    const id = request.params.id;

    console.log(request.body);

    blogModel.findByIdAndUpdate(
      id,
      { $push: { comments: [request.body] } },
      (err) => {
        if (!err) {
          response
            .status(200)
            .send({ message: "artigo atualizado com sucesso" });
        } else {
          response.status(500).send({ message: err.message });
        }
      }
    );
  };
}

export default blogController;
