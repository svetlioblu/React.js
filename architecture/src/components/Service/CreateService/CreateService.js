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
        Object.keys(createData).forEach((x) => {
            if (createData[x] === '' || createData[x] === '#') {
                emptyFields = { ...emptyFields, [x]: true }
            } else {
                emptyFields = { ...emptyFields, [x]: false }
            }
        })
        setnoEntry(emptyFields)
    }

    const onCreate = async (e) => {
        e.preventDefault()
        isEmptyValidation()



        // if (createData.label === '' || createData.description === '' || createData.icon === '#' || createData.detailsImg === '') {
        //     setnoEntry(state => ({ ...state, label: true }))
        //     return
        // }  
        if (createData.label.length > 16) {
            setlongLabel(true)
            return
        }
        // await dataService.create(createData, userAuth.accessToken)
        //     .then(res => setMyListItems(state => [...state, res]))
        //     .then(navigate('/myProjects'))

    }
    return (
        <div className="container">
            <div className="reg-block">
                <div className="reg-block-header">
                    <h2>Create a Service</h2>
                    {longLabel && <p style={{ "color": "red" }}>The Label should be less than 16 chars !</p>}
                </div>
                <form onSubmit={(e) => { onCreate(e, createData) }}>
                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-tag"></i></span>
                        <input type="text" name="label" className="form-control" placeholder="Service label" value={createData.label} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    {noEntry.label && <p style={{ "color": "red" }}>The Label is Empty !</p>}
                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-tasks"></i></span>
                        <textarea rows="2" maxLength="140" name='description' className="form-control" placeholder="Short description" value={createData.description} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} ></textarea>
                    </div>
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
                    <hr />
                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-file-image-o"></i></span>
                        <input type="text" name="detailsImg" className="form-control" placeholder="Image url" value={createData.detailsImg} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-pencil-square-o"></i></span>
                        <input type="text" name="detilesTitle" className="form-control" placeholder="Service title" value={createData.detilesTitle} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} />
                    </div>
                    <div className="input-group margin-bottom-10">
                        <span className="input-group-addon"><i className="fa fa-align-left"></i></span>
                        <textarea rows="2" name='detailsText' className="form-control" placeholder="Detailed description" value={createData.detailsText} onChange={(e) => { setcreateData(state => ({ ...state, [e.target.name]: e.target.value })) }} ></textarea>
                    </div>

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