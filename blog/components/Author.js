import {Avatar, Divider} from 'antd';
import '../static/style/components/Author.css'

const Author = () => {
    return(
        <div className={'author-div'}>
            <div> <Avatar size={100} src={'./Miao.jpg'} alt={'头像'}/></div>
                <div className={'author-introduction'}>
                    全干工程师
                    <Divider>Contact Me</Divider>
                    <Avatar size={28} icon={'github'} className={'account'} />
                    <Avatar size={28} icon={'qq'} className={'account'} />
                    <Avatar size={28} icon={'wechat'} className={'account'} />
                </div>
        </div>
    )
}

export default Author
