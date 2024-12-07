import { __ } from '@wordpress/i18n';

import { PanelBody, SelectControl,__experimentalInputControl as InputControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';


const General = ({ attributes, setAttributes }) => {
  const { purposeType } = attributes;

  

  return (
    <PanelBody className='bPlPanelBody' title={__('Purpose', 'b-blocks')} initialOpen={false}>
      <SelectControl
        label={__('Purpose', 'b-blocks')}
        labelPosition='left'
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) => setAttributes({ purposeType: updateData(purposeType, v) })}
      />
      <InputControl
	label="InputControl"
	labelPosition="top"
	value=""
	type="email"
	isPressEnterToChange
	onChange={ ( nextValue ) => console.log(nextValue) }
/>



    </PanelBody>
  )
}

export default General