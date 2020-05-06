import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { GlobalState } from './redux/types';
import Spinner from './Spinner';
import './Content.css';

const Content: React.FC = () => {

    const state = useSelector((s: GlobalState) => s);
    const { loading, data, error, formData: { country } } = state;

    return (
        <div className="Content">
            {loading ? (<Spinner />) : error ? <h2>Error happend</h2> : (
                data && data.map(({ author, title, url, description, urlToImage: img, publishedAt, content }, i) => (
                    <div key={i} className='Article'>
                        <h3>{title}</h3>
                        <div className="header">
                            Source: {author}
                            <a href={url}>Read source</a>
                            {moment(publishedAt).fromNow()}
                        </div>
                        <div className="body">
                            <img src={img} alt="title" />
                            <p>{country === 'ru' ? description : content}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Content;