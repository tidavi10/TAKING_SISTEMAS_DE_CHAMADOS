import React, { Component } from "react";
import { PageItem, Paginador } from "./styles";

export class Pagination extends Component {
    render() {
        const { postsPerPage, totalPosts, paginate } = this.props;

        const pageNumber = [];
        for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumber.push(i)
        }
        return(
            <nav>
                <Paginador className="pagination justify-content-center">
                    <PageItem className="page-item">
                        <a className="page-link" href="#">Anterior</a>
                    </PageItem>
                        {pageNumber.map(num => (
                            <PageItem className="page-item" key={num}>
                                <a onClick={() => paginate(num)} href="#" className="page-link">{num}</a>
                            </PageItem>
                        ))}
                    <PageItem className="page-item">
                        <a className="page-link" href="#">Próxima</a>
                    </PageItem>
                </Paginador>
            </nav>
        )
    }
}

export default Pagination;