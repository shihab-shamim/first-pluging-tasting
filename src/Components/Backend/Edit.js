import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import index from '../../../src/Components/Backend/Settings/Style/index.css'
import MyComponentWithNavigateRegions from "../MyComponents/MyComponentWithNavigateRegions";
import { __experimentalInputControl as InputControl ,Flex,CheckboxControl,Button,TextControl,SelectControl} from '@wordpress/components';
import { Icon, cloudUpload } from '@wordpress/icons';
import { useState } from 'react';

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;
  const [ firstName, setFirstName ] = useState( 'first name' );
  const [ lasttName, setLastName ] = useState( 'last name' );
  const [gender,setGender]=useState('male')
  




  // console part 
  console.log(firstName);
  console.log(lasttName);
  console.log(gender);

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        {/* <div className="bBlocksTestPurpose">
          {purposeType === "test" ? (
            <p>
              Every text is written for a reason. For example, every text
              message you send has a purpose, whether that is to let your mum
              know when you will be home.
            </p>
          ) : (
            <p>
              If someone sends you an invitation to a party, for example, they
              are telling you what time to arrive and what the sender is
              celebrating, and they might even.
            </p>
          )}
        </div> */}
        {/* <input type="radio" id="html" name="fav_language" value="HTML">
        <label for="html">HTML</label><br> */}
        {/* width: '200px', // Set the desired width
        height: '40px'
         */}
                        <label htmlFor="input1">Name</label>

                        <div
    style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        alignItems: 'center',
    }}
>
    {/* Custom Input for First Name */}
    <TextControl
        className="custom-input"
        placeholder="First name"
        onChange={e => setFirstName(e.target.value)} // Ensure value is retrieved correctly
        type="text"
    />

    {/* Custom Input for Last Name */}
    <TextControl
        className="custom-input"
        placeholder="Last name"
        onChange={e => setLastName(e.target.value)} // Ensure value is retrieved correctly
        type="text"
    />
</div>

        {/*  */}
        <label>Age</label>

        <TextControl
        className="custom-input-age"
        placeholder="ex:234"
        onChange={e => console.log(e.target.value)} // Ensure value is retrieved correctly
        type="number"
    />
    {/*  */}
    <label>Date of Birth</label>

        <TextControl
        className="custom-input-age"
        placeholder="ex:234"
        onChange={e => console.log(e.target.value)} // Ensure value is retrieved correctly
        type="date"
    />

    {/*  */}
    <SelectControl
     className="custom-input-gender"
	label={ ( 'Gender' ) }
	value={ gender } // e.g: value = [ 'a', 'c' ]
	onChange={ ( user ) => { setGender( user ) } }
	options={ [
		{ value: null, label: 'Select a Gender', disabled: true },
		{ value: 'male', label: 'Male' },
		{ value: 'female', label: 'Female' },
		{ value: 'others', label: 'Others' },
	] }
/>
{/*  */}

<label>Email</label>

        <TextControl
        className="custom-input-age"
        placeholder="example@gmail.com"
        onChange={e => console.log(e)} // Ensure value is retrieved correctly
        type="email"
    />

    {/*  */}
    <label>Address</label>

        <TextControl
        className="custom-input-age"
        placeholder="Street 1"
        onChange={e => console.log(e)} // Ensure value is retrieved correctly
        type="text"
    />
        <TextControl
        className="custom-input-age"
        placeholder="Street 2"

        onChange={e => console.log(e)} // Ensure value is retrieved correctly
        type="text"
    />
    
    {/*  */}
    <label >Phone</label>

    <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    alignItems: 'center',
  }}
>
  {/* Custom Input for Area Code */}
  <TextControl
    className="custom-input-code"
    placeholder="Area Code"
    onChange={(e) => console.log(e)} // Ensure value is retrieved correctly
    type="text"
  />

  {/* Custom Input for Phone Number */}
  <TextControl
    className="custom-input-phone"
    placeholder="Phone number"
    onChange={(e) => console.log(e)} // Ensure value is retrieved correctly
    type="text"
  />
</div>

{/*  */}

                        <div
    style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        alignItems: 'center',
    }}
>
    {/* Custom Input for First Name */}
    <TextControl
    label="Post/Zip code"
        className="custom-input"
        placeholder="ex:6464"
        onChange={e => setFirstName(e.target.value)} // Ensure value is retrieved correctly
        type="text"
    />

    {/* Custom Input for Last Name */}
    <TextControl
    label="City"

        className="custom-input"
        placeholder="ex: New Yourk"
        onChange={e => setLastName(e.target.value)} // Ensure value is retrieved correctly
        type="text"
    />
</div>
{/*  */}
<TextControl
    label="Upload Image"
    className="custom-input-img"
    onChange={(e) => setLastName(e.target.value)} // Ensure value is retrieved correctly
    type="file"
    style={{display: 'none'}} // Hide the default file input button for TextControl
/>
  
<div className="file">
    <input
        className="custom-input-image"
        id="input2"
        type="file"
        onChange={(e) => console.log(e.target.value)}
    />

    <label
        htmlFor="input2"
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '816px',
            height: '60px',
            border: '1px solid gray',
            borderRadius: '4px',
            padding: '8px',
            cursor: 'pointer',
            textAlign: 'center',
        }}
        className="custom-label"
    >
        <Icon className="custom-icon" icon={cloudUpload} /> Upload image
    </label>
</div>
<div className="components-checkbox-control">
    <input
        className="checkbox-input"
        id="checkbox1"
        type="checkbox"
        onChange={(e) => console.log(e.target.checked)} // Optional event handler
    />
    <small >I agree to the defined <a style={{ color: '#6A64F1' }} href="#" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'underline'}>
  terms, conditions, and policy
</a></small>
</div>
{/*  */}
<Button style={{ color: '#ffffff',backgroundColor: '#6A64F1', paddingTop: '10px', paddingRight: '15px', paddingBottom: '10px', paddingLeft: '15px' }} isPrimary>Submit</Button>

      




      </div>
      
    </>
  );
};
export default Edit;
