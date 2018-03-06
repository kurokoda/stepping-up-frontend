const createReactClass = require('create-react-class');

// based on https://github.com/insin/react-maskedinput/blob/master/src/index.js

const _extends = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

function _objectWithoutProperties(obj, keys) {
  const target = {};
  for (let i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}

const React     = require('react');
const InputMask = require('inputmask-core');
const PropTypes = require('prop-types');


const KEYCODE_Z = 90;
const KEYCODE_Y = 89;

function isUndo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEYCODE_Y : KEYCODE_Z);
}

function isRedo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEYCODE_Z : KEYCODE_Y);
}

function getSelection(el) {
  let start;
  let end;
  let rangeEl;
  let clone;

  if (el.selectionStart !== undefined) {
    start = el.selectionStart;
    end   = el.selectionEnd;
  } else {
    try {
      el.focus();
      rangeEl = el.createTextRange();
      clone   = rangeEl.duplicate();

      rangeEl.moveToBookmark(document.selection.createRange().getBookmark());
      clone.setEndPoint('EndToStart', rangeEl);

      start = clone.text.length;
      end   = start + rangeEl.text.length;
    } catch (e) {/* not focused or not visible */
    }
  }

  return {start: start, end: end};
}

function setSelection(el, selection) {
  let rangeEl;

  try {
    if (el.selectionStart !== undefined) {
      el.focus();
      el.setSelectionRange(selection.start, selection.end);
    } else {
      el.focus();
      rangeEl = el.createTextRange();
      rangeEl.collapse(true);
      rangeEl.moveStart('character', selection.start);
      rangeEl.moveEnd('character', selection.end - selection.start);
      rangeEl.select();
    }
  } catch (e) {/* not focused or not visible */
  }
}

const MaskedInput = createReactClass({
  displayName: 'MaskedInput',

  propTypes: {
    mask: PropTypes.string.isRequired,

    formatCharacters: PropTypes.object,
    placeholderChar : PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      value: ''
    };
  },

  componentWillMount: function componentWillMount() {
    const options = {
      pattern         : this.props.mask,
      value           : this.props.value,
      formatCharacters: this.props.formatCharacters
    };
    if (this.props.placeholderChar) {
      options.placeholderChar = this.props.placeholderChar;
    }
    this.mask = new InputMask(options);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.mask !== nextProps.mask && this.props.value !== nextProps.mask) {
      // if we get a new value and a new mask at the same time
      // check if the mask.value is still the initial value
      // - if so use the nextProps value
      // - otherwise the `this.mask` has a value for us (most likely from paste action)
      if (this.mask.getValue() === this.mask.emptyValue) {
        this.mask.setPattern(nextProps.mask, {value: nextProps.value});
      } else {
        this.mask.setPattern(nextProps.mask, {value: this.mask.getRawValue()});
      }
    } else if (this.props.mask !== nextProps.mask) {
      this.mask.setPattern(nextProps.mask, {value: this.mask.getRawValue()});
    } else if (this.props.value !== nextProps.value) {
      this.mask.setValue(nextProps.value);
    }
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    if (nextProps.mask !== this.props.mask) {
      this._updatePattern(nextProps);
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.mask !== this.props.mask && this.mask.selection.start) {
      this._updateInputSelection();
    }
  },

  _updatePattern: function _updatePattern(props) {
    this.mask.setPattern(props.mask, {
      value    : this.mask.getRawValue(),
      selection: getSelection(this.input)
    });
  },

  _updateMaskSelection: function _updateMaskSelection() {
    this.mask.selection = getSelection(this.input);
  },

  _updateInputSelection: function _updateInputSelection() {
    setSelection(this.input, this.mask.selection);
  },

  _onChange: function _onChange(e) {
    const maskValue = this.mask.getValue();
    if (e.target.value !== maskValue) {
      // Cut or delete operations will have shortened the value
      if (e.target.value.length < maskValue.length) {
        const sizeDiff = maskValue.length - e.target.value.length;
        this._updateMaskSelection();
        this.mask.selection.end = this.mask.selection.start + sizeDiff;
        this.mask.backspace();
      }
      const value    = this._getDisplayValue();
      e.target.value = value;
      if (value) {
        this._updateInputSelection();
      }
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  },

  _onKeyDown: function _onKeyDown(e) {
    if (isUndo(e)) {
      e.preventDefault();
      if (this.mask.undo()) {
        e.target.value = this._getDisplayValue();
        this._updateInputSelection();
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
      return;
    } else if (isRedo(e)) {
      e.preventDefault();
      if (this.mask.redo()) {
        e.target.value = this._getDisplayValue();
        this._updateInputSelection();
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      this._updateMaskSelection();
      if (this.mask.backspace()) {
        const value    = this._getDisplayValue();
        e.target.value = value;
        if (value) {
          this._updateInputSelection();
        }
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
    }
  },

  _onKeyPress: function _onKeyPress(e) {
    // Ignore modified key presses
    // Ignore enter key to allow form submission
    if (e.metaKey || e.altKey || e.ctrlKey || e.key === 'Enter') {
      return;
    }

    e.preventDefault();
    this._updateMaskSelection();
    if (this.mask.input(e.key || e.data)) {
      e.target.value = this.mask.getValue();
      this._updateInputSelection();
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  },

  _onPaste: function _onPaste(e) {
    e.preventDefault();
    this._updateMaskSelection();
    // getData value needed for IE also works in FF & Chrome
    if (this.mask.paste(e.clipboardData.getData('Text'))) {
      e.target.value = this.mask.getValue();
      // Timeout needed for IE
      setTimeout(this._updateInputSelection, 0);
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  },

  _getDisplayValue: function _getDisplayValue() {
    const value = this.mask.getValue();
    return value === this.mask.emptyValue ? '' : value;
  },

  _keyPressPropName: function _keyPressPropName() {
    if (typeof navigator !== 'undefined') {
      return navigator.userAgent.match(/Android/i) ? 'onBeforeInput' : 'onKeyPress';
    }
    return 'onKeyPress';
  },

  _getEventHandlers: function _getEventHandlers() {
    return _defineProperty({
      onChange : this._onChange,
      onKeyDown: this._onKeyDown,
      onPaste  : this._onPaste
    }, this._keyPressPropName(), this._onKeyPress);
  },

  focus: function focus() {
    this.input.focus();
  },

  blur: function blur() {
    this.input.blur();
  },

  render: function render() {
    const _this = this;

    const ref                = function ref(r) {
      return _this.input = r;
    };
    const maxLength          = this.mask.pattern.length;
    const value              = this._getDisplayValue();
    const eventHandlers      = this._getEventHandlers();
    const _props             = this.props;
    const _props$type        = _props.type;
    const _props$size        = _props.size;
    const size               = _props$size === undefined ? maxLength : _props$size;
    const _props$placeholder = _props.placeholder;
    const type               = _props$type === undefined ? 'text' : _props$type;
    const placeholder        = _props$placeholder === undefined ? this.mask.emptyValue : _props$placeholder;
    const _props2            = this.props;

    const cleanedProps = _objectWithoutProperties(_props2, ['placeholderChar', 'formatCharacters']);

    const inputProps = _extends({}, cleanedProps, eventHandlers, {
      ref,
      maxLength,
      value,
      size,
      placeholder,
      type
    });
    return React.createElement('input', inputProps);
  }
});

module.exports = MaskedInput;
