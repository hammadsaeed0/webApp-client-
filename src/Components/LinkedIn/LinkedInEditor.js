import React, { useState, useEffect, } from 'react'; // prettier-ignore

import { EditorState, convertFromHTML, convertFromRaw, ContentState, convertToRaw, } from 'draft-js'; // prettier-ignore
import 'draft-js/dist/Draft.css';
import { Editor } from 'react-draft-wysiwyg';

import draftToHtml from 'draftjs-to-html';

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import colorPickerIcon from '../../Assets/svg/colorPalette.svg';
import arrowUp from '../../Assets/svg/arrowUp.svg';

import PropTypes from 'prop-types';
import { CompactPicker, ChromePicker } from 'react-color';

const ColorPic = ({ onChange, currentState, expanded, onExpandEvent }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleChange = (color) => {
    onChange('color', color.hex);
  };

  const [showSketchPicker, setShowSketchPicker] = useState(false);

  const renderModal = () => {
    const { color } = currentState;
    return (
      <div className='toolbarColorPickerPopup' onClick={stopPropagation}>
        <CompactPicker //GithubPicker
          color={color}
          onChangeComplete={handleChange}
        />
        <div
          className='moreColorsbtnWrapper'
          onClick={() => setShowSketchPicker(!showSketchPicker)}
        >
          <div className='moreColorsbtn'>
            More colors{' '}
            <img
              style={{ maxWidth: '13px', transform: 'rotate(90deg)' }}
              src={arrowUp}
              alt=''
            />
          </div>
        </div>

        <div style={{ display: showSketchPicker ? null : 'none' }}>
          <ChromePicker // SketchPicker //GithubPicker
            color={color}
            onChangeComplete={handleChange}
          />
        </div>

        {/* <BlockPicker color={color} onChangeComplete={this.onChange} /> */}
      </div>
    );
  };

  return (
    <div
      aria-haspopup='true'
      aria-expanded={expanded}
      aria-label='rdw-color-picker'
      className='toolbarColorPicker'
    >
      <div onClick={onExpandEvent} className='toolbarColorPickerIcon'>
        <img src={colorPickerIcon} alt='' />
      </div>
      {expanded ? renderModal() : undefined}
    </div>
  );
};
ColorPic.propTypes = {
  onChange: PropTypes.func,
  currentState: PropTypes.object,
  expanded: PropTypes.bool,
  onExpandEvent: PropTypes.func,
};

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

export default function LinkedInEditor({
  readOnly,
  admin,
  wrapperClassName,
  editorClassName,
  toolbarClassName,
  content,
  setProfileText,
  markdownData,
}) {
  const forceUpdate = useForceUpdate();
  const [contentState, setContentState] = useState(EditorState.createEmpty());

  const blankContentBlock = {
    blocks: [],
    entityMap: {},
  };

  const [editorInitialState, setEditorInitialState] = useState(
    markdownData
      ? convertToRaw(
          ContentState.createFromBlockArray(convertFromHTML(markdownData))
        )
      : blankContentBlock
  );

  const onContentStateChange = (upadatedContent) => {
    setContentState(upadatedContent);
  };

  function onChange(editorInitialState) {
    setProfileText(draftToHtml(editorInitialState));
    setEditorInitialState(editorInitialState);
  }

  const [editorState, setEditorState] = useState(() => {
    const initialState = EditorState.createWithContent(
      convertFromRaw(editorInitialState)
    );
    return initialState;
  });
  const onEditorStateChange = (ChangedEditorState) => {
    setEditorState(ChangedEditorState);
  };
  useEffect(() => {
    setEditorInitialState(
      convertToRaw(
        ContentState.createFromBlockArray(convertFromHTML(markdownData))
      )
    );
    setEditorState(
      EditorState.createWithContent(convertFromRaw(editorInitialState))
    );
    forceUpdate();
  }, [markdownData]);

  return (
    <>
      <Editor
        readOnly={readOnly ? true : false}
        toolbarOnFocus={admin ? false : true}
        placeholder='Enter Text Here'
        className='ClassAdded '
        editorState={editorState}
        onEditorStateChange={(ChangedEditorState) =>
          onEditorStateChange(ChangedEditorState)
        }
        initialContentState={editorInitialState}
        editorContent={contentState}
        onContentStateChange={onContentStateChange}
        onChange={(editorInitialState) => onChange(editorInitialState)}
        wrapperClassName={wrapperClassName} // 'wrapper'
        editorClassName={editorClassName} // 'editor'
        toolbarClassName={toolbarClassName} // 'toolbar '
        toolbar={{
          options: [
            'history',
            'inline',
            'blockType',
            'fontSize',
            'list',
            'textAlign',
            'colorPicker',
            'fontFamily',
            'emoji',
            'link',
            'remove',
          ],
          inline: {
            // inDropdown: true,
            options: ['bold', 'italic', 'underline'],
            bold: { className: 'bordered-option-classname' },
            italic: { className: 'bordered-option-classname' },
            underline: { className: 'bordered-option-classname' },
            strikethrough: { className: 'bordered-option-classname' },
            code: { className: 'bordered-option-classname' },
          },
          blockType: {
            className: 'bordered-option-classname',
          },
          fontSize: {
            // icon: fontSize,
            className: 'bordered-option-classname',
            options: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
              36, 48, 60, 72, 96,
            ],
            // className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
          fontFamily: {
            options: [
              'Arial',
              'Arial Narrow',
              'Avenir',
              'Book Antiqua',
              'Calibri',
              'Cambria',
              'Century Sans',
              'Constantia',
              'Garamond',
              'Geneva',
              'Georama',
              'Georgia',
              'Gill Sans',
              'Helvetica',
              'Karla',
              'Lato',
              'Merriweather',
              'Montserrat',
              'Open Sans',
              'Oswald',
              'Poppins',
              'Raleway',
              'Roboto',
              'Tahoma',
              'Trebuchet MS',
              'Ubuntu',
              'Veranda',
            ],
            className: 'bordered-option-classname',
          },
          emoji: {
            className: 'demo-option-custom',
            popupClassName: 'toolbar_emoji_popup',
            emojis: [
              '★', '✪', '✯', '✰', 
              '☛', '☚', '☜', '☝', '☞', '☟', '⇨', '►', '◄', '►', '»',
              '▪️', '♦', '◆', '●',
              '✔', '✘', '☐', '☑',
              '✉', '✍', '✎', '✏', '✑', '⌨',
              '✆', '☎', '☏', '📞',
              '👤', '👦', '👧', '👨', '👩', '👪', '👫', '👬', '👭', '👮', '👯',
              '🌏', '🌙', '🌟', '🌠', 
              '🌴', '🌵', '🌷', '🌸', '🌼', '🍀', '🍁', '🍂', '🍎', '🔥',
              '👆', '👇', '👈', '👉', '👊', '👋', '👌', '👍', '👏', '👐', 
              '👑', '💡', '💯', '📎', '🔍', '🔎', '🔑', '🎯', '🏆', '✂️',
              '💰', '💱', '💲', '💳', '📈', '📊',
              '💊', '🔠', '🏢', '💉', 
              '💻', '💾', '💿', '📁', '📱', '📶', '📡',
              '🔧', '🔨', '⚒', '🏠',
              '📖', '📰', '📷', '📹', '📐',
              '👗', '👘', '👚', '👛', '👜', '👝', '👞', '👟', '👠', '👡', '👢', '💎', '👓',
              '☲☲☲☲☲☲☲☲☲', '▄▀▄▀▄▀▄▀▄▀▄', '▬▬▬▬▬▬▬▬', '▓▒░▓▒░▓▒░▓▒',
            ], // prettier-ignore
          },
          list: {
            options: ['unordered', 'ordered'],
          },
          colorPicker: {
            // icon: colorPickerIcon,
            className: 'toolbarColorPicker',
            component: ColorPic,
          },
          link: {
            inDropdown: false,
            className: 'toolbar_link',
            component: undefined,
            popupClassName: 'toolbar_link_popup',
            dropdownClassName: 'toolbar_link_dropdown',
            showOpenOptionOnHover: false,
            defaultTargetOption: '_self',
            options: ['link', 'unlink'],
            link: { className: 'toolbarLink' },
            unlink: { className: undefined },
            linkCallback: undefined,
          },
          textAlign: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ['left', 'center', 'right', 'justify'],
            left: { className: 'text_left' },
            center: { className: 'text_center' },
            right: { className: 'text_right' },
            justify: { className: 'text_justify' },
          },
        }}
      />
      {/* <textarea disabled value={JSON.stringify(contentState, null, 4)} /> */}
    </>
  );
}
