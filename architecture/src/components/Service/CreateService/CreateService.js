import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as dataService from '../../../services/dataService.js'
import { useAuthContext } from '../../../contexts/AuthContext'
import { useDataContext } from '../../../contexts/DataContext'


export const CreateService = () => {
    const navigate = useNavigate()
    const { userAuth } = useAuthContext()
    const { setMyListItems } = useDataContext()

    const [noEntry, setnoEntry] = useState({})
    const [longLabel, setlongLabel] = useState(false)
    const [isUrl, setIsUrl] = useState(false)


    const [createData, setcreateData] = useState({
        label: '',
        description: '',
        icon: '#',
        detailsImg: '',
        detilesTitle: '',
        detailsText: '',

    })
    const isEmptyValidation = () => {
        let emptyFields = {}
        let result = false
        Object.keys(createData).forEach((x) => {
            if (createData[x] === '' || createData[x] === '#') {
                emptyFields = { ...emptyFields, [x]: true }
                result = true
            } else {
                emptyFields = { ...emptyFields, [x]: false }

            }
        })
        setnoEntry(emptyFields)
        return result
    }
    const isLongLabelValidate = () => {
        if (createData.label.length > 16) {
            setlongLabel(true)
        } else {
            setlongLabel(false)
        }
        return longLabel
    }
    const isImageUrlValidate = (urlString) => {
        let urlPattern = new RegExp(('^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$', 'i')
        )
        if (!createData.detailsImg) {
            setIsUrl(false)
            return
        }
        
        setIsUrl(!urlPattern.test(urlString))
        return isUrl
    }

    const onCreate = async (e) => {
        e.preventDefault()
        const checkIsEmptyField = isEmptyValidation()
        const checkIsLongLabel = isLongLabelValidate()
        const checkIsUrl = isImageUrlValidate(createData.detailsImg)

        if (checkIsEmptyField || checkIsLongLabel || checkIsUrl) {
            return
        } else {
            await dataService.create(createData, userAuth.accessToken)
                .then(res => setMyListItems(state => [...state, res]))
                .then(navigate('/myProjects'))
        }

    }
    return (
        <div className="container">
            <div className="reg-block">
                <div className="reg-block-header">
                    <h2>Create a Service</h2>
                </div>
                <form onSubmit={(e) => { onCreate(e, createData) }}>
                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-tag"></i></span>
                        <input type="text" name="label" className="form-control" placeholder="Service label" value={createData.label} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    {noEntry.label && <p style={{ "color": "#81674B" }}>The Label is Empty !</p>}
                    {longLabel && <p style={{ "color": "#81674B" }}>The Label should be less than 16 chars !</p>}
                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-tasks"></i></span>
                        <textarea rows="2" maxLength="140" name='description' className="form-control" placeholder="Short description" value={createData.description} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} ></textarea>
                    </div>
                    {noEntry.description && <p style={{ "color": "#81674B" }}>The Description is Empty !</p>}
                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-caret-square-o-down"></i></span>
                        <select name="icon" className="form-control" value={createData.icon} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} >
                            <option value="#" disabled>Select icon</option>
                            <option value="picture">Picture</option>
                            <option value="loop">Loop</option>
                            <option value="note">Note</option>
                            <option value="map">Map</option>
                        </select>
                    </div>
                    {noEntry.icon && <p style={{ "color": "#81674B" }}>The Icon was not chosen !</p>}

                    <hr />
                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-file-image-o"></i></span>
                        <input type="text" name="detailsImg" className="form-control" placeholder="Image url" value={createData.detailsImg} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    {noEntry.detailsImg && <p style={{ "color": "#81674B" }}>The Image is Empty !</p>}
                    {isUrl && <p style={{ "color": "#81674B" }}>The URL image is Incorrect !</p>}


                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-pencil-square-o"></i></span>
                        <input type="text" name="detilesTitle" className="form-control" placeholder="Service title" value={createData.detilesTitle} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    {noEntry.detilesTitle && <p style={{ "color": "#81674B" }}>No Title !</p>}

                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-align-left"></i></span>
                        <textarea rows="2" name='detailsText' className="form-control" placeholder="Detailed description" value={createData.detailsText} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} ></textarea>
                    </div>
                    {noEntry.detailsText && <p style={{ "color": "#81674B" }}>The Text Field is Empty !</p>}
                    <hr />

                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <button type="submit" className="btn-u btn-block btn-u-brown">Create</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}