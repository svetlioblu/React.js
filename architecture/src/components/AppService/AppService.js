import { ListItems } from "./ListItems"

export const AppService = () => {

    return (
        <section id="about">
            <div className="container content-lg">
                <div className="g-heading-v7 text-center g-mb-70">
                    <h2 className="h2"><em className="block-name">What We Offer</em> All for your comfort</h2>
                </div>
                <ListItems />

                {/* <!-- modal popup window --> */}
                <div className="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <button aria-hidden="true" data-dismiss="modal" className="close" type="button"><i className="fa fa-times"></i></button>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="modal-top margin-bottom-40"></div>
                                <div className="modal-bot g-heading-v7">
                                    <h3 className="g-color-white">Omom sociis natoque penatibus</h3>
                                    <p className="margin-bottom-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Omom sociis natoque penatibus.</p>
                                    <p className="margin-bottom-30"><img src="assets/img-temp/wp5.jpg" alt="" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}