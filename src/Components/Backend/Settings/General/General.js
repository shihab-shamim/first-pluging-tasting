import { __ } from '@wordpress/i18n';
import {useState} from 'react'

import { PanelBody, SelectControl,__experimentalInputControl as InputControl,AlignmentMatrixControl,AnglePickerControl,Animate,Notice,BaseControl, Button,__experimentalBorderBoxControl as BorderBoxControl,__experimentalBorderControl as BorderControl,ButtonGroup, CardBody, Card, CardDivider, CardFooter, FlexBlock, FlexItem, CardHeader, CardMedia,__experimentalHeading as Heading ,__experimentalText as Text, CheckboxControl, ClipboardButton, ColorIndicator, ColorPalette, ColorPicker, ComboboxControl,Composite ,__experimentalConfirmDialog as ConfirmDialog, CustomSelectControl, Dashicon, DateTimePicker,__experimentalDimensionControl as DimensionControl, __experimentalDivider as Divider,
  __experimentalVStack as VStack,  
  DropZoneProvider,
  DropZone}from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import MyDisable from '../../../MyComponents/MyDisable';
import MyDraggable from '../../../MyComponents/MyDraggable';
import MyDropdownMenu from '../../../MyComponents/MyDropdownMenu';
import MyDropdown from '../../../MyComponents/MyDropdown';
const colors = [
  { name: 'Blue 20', color: '#72aee6' },
  // ...
];
const options = [
  {
      value: 'small',
      label: 'Small',
  },
  {
      value: 'normal',
      label: 'Normal',
  },
  {
      value: 'large',
      label: 'Large',
  },
];



const General = ({ attributes, setAttributes }) => {
  const { purposeType } = attributes;
  const [value,setValues]=useState('')
  const [ alignment, setAlignment ] = useState( 'center center' );
  const [ angle, setAngle ] = useState( 0 );
  const defaultBorder = {
    color: '#72aee6',
    style: 'dashed',
    width: '1px',
};
const [ borders, setBorders ] = useState( {
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder,
} );
const [ bborder, setBborder ] = useState();
const [ isChecked, setChecked ] = useState( true );
const [ hasCopied, setHasCopied ] = useState( false );
const [ color, setColor ] = useState ( '' )
    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
    ];
    const [ fontSize, setFontSize ] = useState();
    const [ filteredOptions, setFilteredOptions ] = useState( options )
    const [ date, setDate ] = useState( new Date() );
    const [ paddingSize, setPaddingSize ] = useState( '' );
    const [ hasDropped, setHasDropped ] = useState( false );



//   console.log(value)
//   console.log(alignment)
//   console.log(angle);
// console.log(borders);
// console.log(bborder);
// console.log(date);
// console.log(paddingSize);


  return (
    <PanelBody className='bPlPanelBody' title={__('Purpose', 'b-blocks')} initialOpen={false}>
      <SelectControl
        label={__('Purpose', 'b-blocks')}
        labelPosition='left'
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) => setAttributes({ purposeType: updateData(purposeType, v) })}
      />

      {/* input control added  */}
      <InputControl
	label="InputControl"
	labelPosition="top"
	value=""
	type="email"
	// isPressEnterToChange
	onChange={ ( nextValue ) => setValues(nextValue) }
/>

 {/*AlignmentMatrixControl */}
 <AlignmentMatrixControl
            value={ alignment }
            onChange={ setAlignment }
        />

        {/* alignment */}
        <AnglePickerControl
      value={ angle }
      onChange={ setAngle }
    />


    {/* Animate */}
    <Animate type="slide-in" options={ { origin: 'top' } }>
        { ( { className } ) => (
            <Notice className={ className } status="success">
                <p>Animation finished.</p>
            </Notice>
        ) }
    </Animate>

    {/*  BaseControl */}
    <BaseControl
	help="Anything you want opens on click"
>
	<BaseControl.VisualLabel>
		Author
	</BaseControl.VisualLabel>
	<Button onClick={("select your author")}  style={{ marginLeft: "8px"}}>
		Select an author
	</Button>
</BaseControl>

{/* BorderBoxControl */}
<BorderBoxControl
            // __next40pxDefaultSize
            colors={ colors }
            label={ __( 'Borders' ) }
            onChange={(newBorders) => setBorders(newBorders)}
            value={ borders }
        />
{/* BorderControl */}

<BorderControl
            __next40pxDefaultSize
            colors={ colors }
            label={ __( 'Border' ) }
            onChange={ setBborder }
            value={ bborder }
        />

        {/* ButtonGroup */}
        <ButtonGroup>
        <Button onChange={('button 1')} variant="primary">Button 1</Button>
        <Button onChange={('button 2')} variant="primary">Button 2</Button>
    </ButtonGroup>

    {/* Button */}
    <Button variant="secondary">Click me!</Button>;

    {/* Card Body */}
    <Card>
        <CardBody>Card Body</CardBody>
    </Card>

    {/* Card divid */}
    <Card>
        <CardDivider />
        <CardBody>Card divider</CardBody>
    </Card>
    {/* Card footer */}

    <Card>
    <CardFooter>
            <FlexBlock>Content</FlexBlock>
            <FlexItem>
                <Button>Action</Button>
            </FlexItem>
        </CardFooter>
    </Card>
{/* card header */}
<Card>
<CardHeader>Card Header</CardHeader>
</Card>
{/* Card Media  */}
<Card>
<CardMedia>
  <h1>Card Media</h1>
            <img src="https://i.ibb.co.com/4RBL613/1714662976645-2.jpg" />
        </CardMedia>
</Card>

{/* card  */}
<Card>
            <CardHeader>
                <Heading level={ 4 }>Card Title</Heading>
            </CardHeader>
            <CardBody>
                <Text>Card Content</Text>
            </CardBody>
            <CardFooter>
                <Text>Card Footer</Text>
            </CardFooter>
        </Card>
        {/* checkbox  */}
        <CheckboxControl
            __nextHasNoMarginBottom
            label="Is author"
            help="Is the user a author or not?"
            checked={ isChecked }
            onChange={ setChecked }
        />


{/* ClipboardButton */}
<ClipboardButton
            variant="primary"
            text="Text to be copied."
            onCopy={ () => setHasCopied( true ) }
            onFinishCopy={ () => setHasCopied( false ) }
        >
            { hasCopied ? 'Copied!' : 'Copy Text' }
        </ClipboardButton>

        {/* color indicator */}
        <ColorIndicator colorValue="#0073aa" />

        {/* color piker  */}
        <ColorPalette
            colors={ colors }
            value={ color }
            onChange={ ( color ) => setColor( color ) }
        />

{/* color piker */}
<ColorPicker
            color={color}
            onChange={setColor}
            enableAlpha
            defaultValue="#000"
        />
        {/* combo box control */}
        <ComboboxControl
	label="Font Size"
	value="small"
	options={[
		{
			value: "small",
			label: "Small"
		},
		{
			value: "normal",
			label: "Normal"
		},
		{
			value: "large",
			label: "Large"
		},
		{
			value: "huge",
			label: "Huge"
		}
	]}
	onInputChange={(inputValue) =>
		setFilteredOptions(
			[
				{
					value: "small",
					label: "Small"
				},
				{
					value: "normal",
					label: "Normal"
				},
				{
					value: "large",
					label: "Large"
				},
				{
					value: "huge",
					label: "Huge"
				}
			].filter(option =>
				option.label.toLowerCase().startsWith(inputValue.toLowerCase())
			)
		)
	}
/>

{/* composite */}
<Composite>
  <Composite.Group>
    <Composite.GroupLabel>Label</Composite.GroupLabel>
    <Composite.Item>Item 1</Composite.Item>
    <Composite.Item>Item 2</Composite.Item>
  </Composite.Group>
</Composite>

{/* ConfirmDialog  */}
<ConfirmDialog onConfirm={ () => console.debug( ' Confirmed! ' ) }>
            Are you sure? <strong>This action cannot be undone!</strong>
        </ConfirmDialog>

        {/*  CustomSelectControl*/}
        <CustomSelectControl
	label="Font Size"
	options={ [
		{
			key: 'small',
			name: 'Small',
			style: { fontSize: '50%' },
		},
		{
			key: 'normal',
			name: 'Normal',
			style: { fontSize: '100%' },
		},
		{
			key: 'large',
			name: 'Large',
			style: { fontSize: '200%' },
		},
	] }
	onChange={ ( e ) => console.log(e) }
	value={ [
		{
			key: 'small',
			name: 'Small',
			style: { fontSize: '75%' },
		},
		{
			key: 'normal',
			name: 'Normal',
			style: { fontSize: '100%' },
		},
		{
			key: 'large',
			name: 'Large',
			style: { fontSize: '125%' },
		},
	].find( ( option ) => option.key === 'large' ) }
/>
{/*Dashboard icon   */}
<>
        <Dashicon icon="admin-home" />
        <Dashicon icon="products" />
        <Dashicon icon="wordpress" />
    </>

    {/* Date Time piker  */}
    <DateTimePicker
            currentDate={ date }
            onChange={ ( newDate ) => setDate( newDate ) }
            is12Hour={ true }
        />
        {/*  DimensionControl*/}
        <DimensionControl
            __nextHasNoMarginBottom
            __next40pxDefaultSize
            label={ 'Padding' }
            icon={ 'desktop' }
            onChange={ ( value ) => setPaddingSize( value ) }
            value={ paddingSize }
        />

        {/* disable components */}
        <MyDisable></MyDisable>

        {/* text divider  */}
        <VStack spacing={2}>
            <Text>Some text here</Text>
            <Divider />
            <Text>Some more text here</Text>
        </VStack>

        {/* MyDraggable */}
        <MyDraggable></MyDraggable>
        {/*  DropZoneProvider*/}
        <DropZoneProvider>
        <div>
            { hasDropped ? 'Dropped!' : 'Drop something here' }
            <DropZone
                onFilesDrop={ () => setHasDropped( true ) }
                onHTMLDrop={ () => setHasDropped( true ) }
                onDrop={ () => setHasDropped( true ) }
            />
        </div>
</DropZoneProvider>

{/* MyDropdownMenu */}
<MyDropdownMenu></MyDropdownMenu>

{/* MyDropdown */}
<MyDropdown></MyDropdown>
    </PanelBody>
  )
}

export default General