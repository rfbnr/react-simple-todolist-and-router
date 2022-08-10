import {useParams} from "react-router-dom";

function BlogDetail() {
    const articleId = useParams();

    return (
        <>
            <h1>Halaman Detail</h1>
            <p>Hallo ini halaman detail {articleId.article} </p>
        </>
    );
}

export default BlogDetail;
