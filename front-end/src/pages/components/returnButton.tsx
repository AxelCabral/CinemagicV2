import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ReturnButton() {
    return (
        <div className="button-table-style">
            <a href="javascript: history.go(-1)" title="Voltar" target="_self" rel="prev">
                <span className='icon fa-arrow-left'><FontAwesomeIcon icon={faArrowLeft} /></span>
            </a>
        </div>
    )
}