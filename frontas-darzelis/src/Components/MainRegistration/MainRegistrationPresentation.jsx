import React from "react";

const MainRegistrationPresentation = ({onSubmit, ...other }) => {
    return (
        <form className="col-lg-5 shadow p-3 mt-5 bg-white rounded" onSubmit={onSubmit} >
            <div className="mb-3">
                <h4>Vaiko registracijos į darželį forma</h4>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="selectChild">Vaikas</label>
                <select className="form-control" id="selectChild">
                    <option selected>Pasirinkite vaiką</option>
                    {/*{children.map((child) => (*/}
                    {/*    <option className="child-name"*/}
                    {/*            key={child.childId}*/}
                    {/*            value={child.childId}>*/}
                    {/*        {child.firstName + ' ' + child.lastName}*/}
                    {/*    </option>*/}
                    {/*))}*/}
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="selectKindergarten1">I prioriteto darželis</label>
                <select className="form-control" id="selectKindergarten1">
                    <option selected>Pasirinkite darželį</option>
                    {/*{kindergartens.map(kindergarten => (*/}
                    {/*    <option*/}
                    {/*        key={kindergarten.id}*/}
                    {/*        value={kindergarten.id}>*/}
                    {/*        {kindergarten.name}*/}
                    {/*    </option>*/}
                    {/*))}*/}
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="selectKindergarten2">II prioriteto darželis</label>
                <select className="form-control" id="selectKindergarten2">
                    <option selected>Pasirinkite darželį</option>
                    {/*{kindergartens.map(kindergarten => (*/}
                    {/*    <option*/}
                    {/*        key={kindergarten.id}*/}
                    {/*        value={kindergarten.id}>*/}
                    {/*        {kindergarten.name}*/}
                    {/*    </option>*/}
                    {/*))}*/}
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="selectKindergarten3">III prioriteto darželis</label>
                <select className="form-control" id="selectKindergarten3">
                    <option selected>Pasirinkite darželį</option>
                    {/*{kindergartens.map(kindergarten => (*/}
                    {/*    <option*/}
                    {/*        key={kindergarten.id}*/}
                    {/*        value={kindergarten.id}>*/}
                    {/*        {kindergarten.name}*/}
                    {/*    </option>*/}
                    {/*))}*/}
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="selectKindergarten4">IV prioriteto darželis</label>
                <select className="form-control" id="selectKindergarten4">
                    <option selected>Pasirinkite darželį</option>
                    {/*{kindergartens.map(kindergarten => (*/}
                    {/*    <option*/}
                    {/*        key={kindergarten.id}*/}
                    {/*        value={kindergarten.id}>*/}
                    {/*        {kindergarten.name}*/}
                    {/*    </option>*/}
                    {/*))}*/}
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="selectKindergarten5">V prioriteto darželis</label>
                <select className="form-control" id="selectKindergarten5">
                    <option selected>Pasirinkite darželį</option>
                    {/*{kindergartens.map(kindergarten => (*/}
                    {/*    <option*/}
                    {/*        key={kindergarten.id}*/}
                    {/*        value={kindergarten.id}>*/}
                    {/*        {kindergarten.name}*/}
                    {/*    </option>*/}
                    {/*))}*/}
                </select>
            </div>
            <button type="submit" className="mr-4 btn">Pateikti</button>
        </form>
    )
};
export default MainRegistrationPresentation