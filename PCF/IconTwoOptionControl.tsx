import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { initializeIcons, IconNames } from '@uifabric/icons';

import { IconButton, IIconProps, IContextualMenuProps, Stack } from 'office-ui-fabric-react';


export interface IProps {
    selected: boolean;
 
    onChange: (selected:boolean) => void;
}

export interface IState {
    selectedvalue: "left" | "right";
}


export class IconTwoOptionControl extends React.Component<IProps,IState> {

    constructor(props: Readonly<IProps>) {

        initializeIcons();
        super(props);
        this.state = { selectedvalue: this.getSelectedValue(this.props.selected)};
        this.onChange = this.onChange.bind(this);

    }

    componentWillReceiveProps(props: IProps) {

        this.setState({selectedvalue : this.getSelectedValue(props.selected)});

    }

    getSelectedValue(selected:boolean){
        return selected == true ? "right": "left"
    }

    getLeftRight(selectedvalue:string){
        return selectedvalue == "right" ? "right" : "left";
    }

    getSelected(selectedvalue:string){
         return selectedvalue == "right";
    }

    onChange(ev?: React.SyntheticEvent<HTMLElement>, option?: IChoiceGroupOption) {
        if(option != undefined)
        {
            
            let selected = this.getSelected(option.key)

            this.setState({selectedvalue: this.getLeftRight(option.key)},)
            this.props.onChange(selected);
            
        }
        
    }

    render() {
        
           
            var emojiIcon: IIconProps = { iconName: 'DoubleChevronRight', };
         
            emojiIcon.style={float:'right',color:'#000000', marginLeft: "auto"};

            return (
                <div id="child" style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton iconProps={emojiIcon} title="Next" ariaLabel="Next"onClick={(e) => {
                this.props.onChange(true)
                
            }} />

             </div>

            );
    }

}