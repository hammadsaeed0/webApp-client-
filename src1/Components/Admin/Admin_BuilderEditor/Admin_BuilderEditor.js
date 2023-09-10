import React, { useState, useEffect } from 'react';

import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import draftToHtml from 'draftjs-to-html';

import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import colorPickerIcon from '../../../Assets/svg/colorPalette.svg';
import arrowUp from '../../../Assets/svg/arrowUp.svg';

import PropTypes from 'prop-types';
import { CompactPicker, ChromePicker } from 'react-color';

const ColorPic = ({ onChange, currentState, expanded, onExpandEvent }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleChange = (color) => {
    // const { onChange } = this.props;
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

export default function AdminBuilderEditor({
  content,
  setProfileText,
  markdownData,
}) {
  const [contentState, setContentState] = useState(EditorState.createEmpty());

  const blocksFromHTML = markdownData && convertFromHTML(markdownData);
  const state =
    markdownData &&
    ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    markdownData && setEditorState(EditorState.createWithContent(state));
  }, []);
  const onContentStateChange = (upadatedContent) => {
    setContentState(upadatedContent);
  };

  function onChange(editorState) {
    setProfileText(draftToHtml(editorState));
    setEditorState(editorState);
  }

  return (
    <>
      <Editor
        // toolbarOnFocus
        className='ClassAdded admin_builderEditor'
        onEditorStateChange={(editorState) => setEditorState(editorState)}
        initialContentState={content}
        editorContent={markdownData && convertFromHTML(markdownData)}
        onContentStateChange={onContentStateChange}
        onChange={(editorState) => onChange(editorState)}
        wrapperClassName='Admin_builderEditor_wrapper'
        editorClassName='Admin_builderEditor_editor'
        toolbarClassName='Admin_builderEditor_toolbar '
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
