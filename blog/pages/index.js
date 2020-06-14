import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header.js'
import Author from "../components/Author.js";
import Advert from '../components/Advert.js'
import Footer from '../components/Footer.js'
import {Col, Row, List, Icon} from "antd";
import '../static/style/pages/index.css'
import axios from 'axios'


const Home = (list) => {

    const [mylist, setMylist] = useState(list.data)

    return(
        <div>
          <Head>
            <title>Home</title>
          </Head>
          <Header/>
          <Row className={'comm-main'} type={'flex'} justify={'center'}>
              <Col className={'comm-left'} xs={24} sm={24} md={16} lg={18} lx={14}>
                  <List
                      header={<div>最新日志</div>}
                      itemLayout={'vertical'}
                      dataSource={mylist}
                      renderItem={item => (
                          <List.Item>
                              <div className={'list-title'}>
                                  <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                                    <a>
                                        {item.title}
                                    </a>
                                  </Link>
                              </div>
                              <div className={'list-icon'}>
                                  <span><Icon type={'calendar'} />{item.addTime}</span>
                                  <span><Icon type={'folder'} />{item.typeName}</span>
                                  <span><Icon type={'fire'} />{item.view_count}</span>
                              </div>
                              <div className={'list-context'}>{item.introduce}</div>
                          </List.Item>
                      )}
                  >
                  </List>
              </Col>
              <Col className={'comm-right'} xs={24} sm={0} md={7} lg={5} lx={4}>
                  <Author />
                  <Advert />
              </Col>
          </Row>

          <Footer />
        </div>
    )
}

Home.getInitialProps = async ()=>{
    const promise = new Promise((resolve)=>{
        axios('http://127.0.0.1:7001/default/getArticleList').then(
            (res) => {
                console.log('----->',res.data)
                resolve(res.data)
            }
        )
    })
    return await promise
}


export default Home