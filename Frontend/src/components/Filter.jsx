import SchoolIcon from '@material-ui/icons/School';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PublicIcon from '@material-ui/icons/Public';
import { allInstitutions } from "../redux/Actions/InstitutionActions"
import { useDispatch, useSelector } from "react-redux"
import { react, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FilterType } from "./FilterType"

export const Filter = (props) => {

    const [country, setCountry] = useState("")
    const [category, setCategory] = useState("")
    const [degree, setDegree] = useState("")
    const [subject, setSubject] = useState("")
    const [institution, setInstitution] = useState("")

    const handleChangeCountry = event => {
        setCountry({ value: event.target.value });
    };

    const handleChangeCategory = event => {
        setCategory({ value: event.target.value });
    };
    const handleChangeDegree = event => {
        setDegree({ value: event.target.value });
    };
    const handleChangeSubject = event => {
        setSubject({ value: event.target.value });
    };
    const handleChangeInstitution = event => {
        setInstitution({ institution: event.target.value });
    };
    const InstitutionErrors = useSelector((state) => state.institutionReducer.errors);

    const dispatch = useDispatch();

    const getInstitutionsList = () => dispatch(allInstitutions());
    const data = useSelector(
        (state) => state.institutionReducer.data
    );
    useEffect(() => {
        getInstitutionsList();
    })

    const filterDropdown = data.filter(function(result) {
       console.log(result)
      });

    return (
        <>
            <div className="form-container">
                <form action="">

                    <div className="input-box">
                        <span><PublicIcon /> Country</span>

                        <select name="universities[]" class="form-select my-2"
                            value={country}
                            onChange={handleChangeCountry}>
                            {data && data.map((institution) => (
                                <option disabled="" selected="" key={institution._id} >{institution.country}
                                </option>
                            ))
                            }
                        </select>
                    </div>

                    <div className="input-box">
                        <span><MenuBookIcon /> Categories</span>

                        <select name="study_levels[]" class="form-select my-2"
                            value={category}
                            onChange={handleChangeCategory}>

                            {data && data.map((institution) => (
                                <option disabled="" selected="" key={institution._id} >{institution.category}
                                </option>
                            ))
                            }

                        </select>
                    </div>

                    <div className="input-box">
                        <span><SchoolIcon /> Degree</span>
                        <select name="universities[]" class="form-select my-2"
                            value={degree}
                            onChange={handleChangeDegree}>

                            <option disabled="" selected="">University
                            </option>

                            {data && data.map((institution) => (
                                <option disabled="" selected="" key={institution._id} >{institution.degree}
                                </option>
                            ))
                            }
                        </select>
                    </div>

                    <div className="input-box">
                        <span><CardMembershipIcon /> Subject</span>
                        <div class="col-xl-4">
                            <select name="degree_subjects[]" class="form-select my-2"
                                value={subject}
                                onChange={handleChangeSubject}>

                                {data && data.map((institution) => (
                                    <option disabled="" selected="" key={institution._id} >{institution.subject}
                                    </option>
                                ))
                                }
                            </select>
                        </div>
                    </div>

                    {/* <Link to='filter-type'>  */}
                    <input type="submit" name="search" id="" value="Search" class="btn btn-home" />
                    {/* </Link> */}

                </form>

                <div>
                    {filterDropdown.map(e => (
                        <div key={e._id} style={{ margin: "10px" }}>
                            {e.name}
                            <br />
                        </div>
                    ))}
                </div>


            </div>
        </>
    );
};