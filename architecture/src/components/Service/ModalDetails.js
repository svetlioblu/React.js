import { useDataContext } from "../../contexts/DataContext"

export const ModalDetails = () => {
    const { details } = useDataContext()

    return (
        <div className="modal fade bs-example-modal-lg" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <button aria-hidden="true" data-dismiss="modal" className="close" type="button" ><i className="fa fa-times"></i></button>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="modal-top margin-bottom-40"></div>
                        <div className="modal-bot g-heading-v7">
                            <h3 className="g-color-white">{details.title}</h3>
                            <p className="margin-bottom-30">{details.text}</p>
                            <p className="margin-bottom-30"><img src={details.img} alt={details.title} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}