'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    const result = await this.app.mysql.get('blog_content', {});
    console.log(result);

    this.ctx.body = result;
  }
}

module.exports = HomeController;

class MayBe{
  static of (value){
    return new MayBe
  }

  constructor(value){
    this._value = value
  }
