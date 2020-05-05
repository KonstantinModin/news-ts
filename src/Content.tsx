import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { GlobalState } from './redux/types';
import Spinner from './Spinner';
import './Content.css';

const Content: React.FC = () => {

    const state = useSelector((s: GlobalState) => s);
    const { loading, data, error } = state;

    return (
        <div className="Content">
            {loading ? (<Spinner />) : error ? <h2>Error happend</h2> : (
                data && data.map(({ author, title, url, urlToImage: img, publishedAt, content }, i) => (
                    <div key={i} className='Article'>
                        <h3>{title}</h3>
                        <div className="header">
                            Source: {author}
                            <a href={url}>Read source</a>
                            {moment(publishedAt).fromNow()}
                        </div>
                        <div className="body">
                            <img src={img} alt="title" />
                            <p>{content}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Content;