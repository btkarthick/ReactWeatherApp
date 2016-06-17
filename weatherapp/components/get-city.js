/**
 * Get city component
 * 
 */

var React = require('react');
var PropTypes = React.PropTypes;


var styles = {

    column : { marginTop : '10px', width: '60%' },

    row : { width: '34%', marginLeft: '8px' }
}

var GetCity = function (props) {
    
    var formClass = (props.formType === 'row') ? 'form-inline' : 'form-horizontal'
    
    return (
             <form className={formClass} onSubmit={props.onSubmitCity}>
                <div className='form-group'>

                    <input  type="text" 
                            className="form-control" 
                            placeholder="Chennai, Tamilnadu" 
                            onChange={props.onUpdateCity} 
                            value={props.city} />
                       
                        <button type="submit" 
                            className='btn btn-success' 
                            style={styles[props.formType]}>Get Weather</button>
                </div>
            </form>   

           )
};

GetCity.PropTypes = {

    formType      : PropTypes.string.isRequired,
    onUpdateCity  : PropTypes.func.isRequired,
    onSubmitCity  : PropTypes.func.isRequired,
    city          : PropTypes.string.isRequired
}

module.exports = GetCity;