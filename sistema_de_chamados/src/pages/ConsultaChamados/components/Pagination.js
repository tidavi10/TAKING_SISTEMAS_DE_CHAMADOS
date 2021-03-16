import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1 ) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
}

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 1};  
    }

    get totalPages () {
        return Math.ceil(this.props.totalRecords / this.props.pageLimit)
    }
    fetchPageNumbers = () => {
        const totalPages = this.totalPages
        const currentPage = this.state.currentPage;
        const pageNeighbours = this.props.pageNeighbours;
    
        const totalNumbers = (this.props.pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;
    
        if (totalPages > totalBlocks) {
          const startPage = Math.max(2, currentPage - pageNeighbours);
          const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
          let pages = range(startPage, endPage);
    
          const hasLeftSpill = startPage > 2;
          const hasRightSpill = (totalPages - endPage) > 1;
          const spillOffset = totalNumbers - (pages.length + 1);
    
          switch (true) {

            case (hasLeftSpill && !hasRightSpill): {
              const extraPages = range(startPage - spillOffset, startPage - 1);
              pages = [LEFT_PAGE, ...extraPages, ...pages];
              break;
            }
    
            case (!hasLeftSpill && hasRightSpill): {
              const extraPages = range(endPage + 1, endPage + spillOffset);
              pages = [...pages, ...extraPages, RIGHT_PAGE];
              break;
            }
    
            case (hasLeftSpill && hasRightSpill):
            default: {
              pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
              break;
            }
          }
    
          return [1, ...pages, totalPages];
        }
    
        return range(1, totalPages);
      }

    render() {
        if (!this.props.totalRecords || this.props.totalPages === 1) return null;

        const { currentPage } = this.state;
        const pages = this.fetchPageNumbers();

        return(
            <Fragment>
                <nav aria-label="Countries Pagination">
                    <ul className="pagination">
                        { pages.map((page, index) => {
                            if (page === LEFT_PAGE) return (
                                <li key={index} className="page-item">
                                    <a className="page-link" href="#" aria-label="Anterior" onClick={this.handleMoveLeft}>
                                        <span arial-hidden="true">&laquo;</span>
                                        <span className="sr-only">Anterior</span>
                                    </a>
                                </li>
                            );

                            if (page === RIGHT_PAGE) return (
                                <li key={index} className="page-item">
                                    <a className="page-link" href="#" aria-label="Proximo" onClick={this.handleMoveRight}>
                                        <span arial-hidden="true">&raquo;</span>
                                        <span className="sr-only">Próximo</span>
                                    </a>
                                </li>
                            );

                            return (
                                <li key={index} className={`page-item${ currentPage === page ? 'active' : ''}`}>
                                    <a className="page-link" href="#" onClick={ this.handleClick(page )}>{ page }</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </Fragment>
        );
    }

    gotoPage = page => {
        const { onPageChanged = f => f } = this.props;
        const currentPage = Math.max(0, Math.min(page, this.totalPages));
        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.props.pageLimit,
            totalRecords: this.props.totalRecords
        };
        
        this.setState({ currentPage }, () => onPageChanged(paginationData));
    }

    handleClick = page => evt => {
        evt.preventDefault();
        this.gotoPage(page);
    }

    handleMoveLeft = evt => {
        evt.preventDefault();
        this.gotoPage(this.state.currentPage - (this.props.pageNeighbours * 2) - 1);
    }

    handleMoveRight = evt => {
        evt.preventDefault();
        this.gotoPage(this.state.currentPage + (this.props.pageNeighbours * 2) + 1);
    }
}

Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    pageNeighbours: PropTypes.number,
    onPageChanged: PropTypes.func
};

export default Pagination;





