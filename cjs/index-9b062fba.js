'use strict';

const stencilaActionMenu_stencilaEditor_stencilaNodeList_entry = require('./stencila-action-menu.stencila-editor.stencila-node-list-0109cb60.js');
require('./index-c7f4beea.js');
require('./slotSelectors-20d2cae5.js');
require('./schema-3bbb20ef.js');
require('./_commonjsHelpers-1fbbf0eb.js');
require('./function-a5c185a1.js');
require('./imagePlotlyUtils-44e0c361.js');

// Counts the column offset in a string, taking tabs into account.
// Used mostly to find indentation.
function countCol(string, end, tabSize, startIndex = 0, startValue = 0) {
    if (end == null) {
        end = string.search(/[^\s\u00a0]/);
        if (end == -1)
            end = string.length;
    }
    return stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.countColumn(string.slice(startIndex, end), startValue, tabSize);
}
/**
Encapsulates a single line of input. Given to stream syntax code,
which uses it to tokenize the content.
*/
class StringStream {
    /**
    @internal
    */
    constructor(
    /**
    The line.
    */
    string, tabSize, 
    /**
    The current indent unit size.
    */
    indentUnit) {
        this.string = string;
        this.tabSize = tabSize;
        this.indentUnit = indentUnit;
        /**
        The current position on the line.
        */
        this.pos = 0;
        /**
        The start position of the current token.
        */
        this.start = 0;
        this.lastColumnPos = 0;
        this.lastColumnValue = 0;
    }
    /**
    True if we are at the end of the line.
    */
    eol() { return this.pos >= this.string.length; }
    /**
    True if we are at the start of the line.
    */
    sol() { return this.pos == 0; }
    /**
    Get the next code unit after the current position, or undefined
    if we're at the end of the line.
    */
    peek() { return this.string.charAt(this.pos) || undefined; }
    /**
    Read the next code unit and advance `this.pos`.
    */
    next() {
        if (this.pos < this.string.length)
            return this.string.charAt(this.pos++);
    }
    /**
    Match the next character against the given string, regular
    expression, or predicate. Consume and return it if it matches.
    */
    eat(match) {
        let ch = this.string.charAt(this.pos);
        let ok;
        if (typeof match == "string")
            ok = ch == match;
        else
            ok = ch && (match instanceof RegExp ? match.test(ch) : match(ch));
        if (ok) {
            ++this.pos;
            return ch;
        }
    }
    /**
    Continue matching characters that match the given string,
    regular expression, or predicate function. Return true if any
    characters were consumed.
    */
    eatWhile(match) {
        let start = this.pos;
        while (this.eat(match)) { }
        return this.pos > start;
    }
    /**
    Consume whitespace ahead of `this.pos`. Return true if any was
    found.
    */
    eatSpace() {
        let start = this.pos;
        while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))
            ++this.pos;
        return this.pos > start;
    }
    /**
    Move to the end of the line.
    */
    skipToEnd() { this.pos = this.string.length; }
    /**
    Move to directly before the given character, if found on the
    current line.
    */
    skipTo(ch) {
        let found = this.string.indexOf(ch, this.pos);
        if (found > -1) {
            this.pos = found;
            return true;
        }
    }
    /**
    Move back `n` characters.
    */
    backUp(n) { this.pos -= n; }
    /**
    Get the column position at `this.pos`.
    */
    column() {
        if (this.lastColumnPos < this.start) {
            this.lastColumnValue = countCol(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
            this.lastColumnPos = this.start;
        }
        return this.lastColumnValue;
    }
    /**
    Get the indentation column of the current line.
    */
    indentation() {
        return countCol(this.string, null, this.tabSize);
    }
    /**
    Match the input against the given string or regular expression
    (which should start with a `^`). Return true or the regexp match
    if it matches.
    
    Unless `consume` is set to `false`, this will move `this.pos`
    past the matched text.
    
    When matching a string `caseInsensitive` can be set to true to
    make the match case-insensitive.
    */
    match(pattern, consume, caseInsensitive) {
        if (typeof pattern == "string") {
            let cased = (str) => caseInsensitive ? str.toLowerCase() : str;
            let substr = this.string.substr(this.pos, pattern.length);
            if (cased(substr) == cased(pattern)) {
                if (consume !== false)
                    this.pos += pattern.length;
                return true;
            }
            else
                return null;
        }
        else {
            let match = this.string.slice(this.pos).match(pattern);
            if (match && match.index > 0)
                return null;
            if (match && consume !== false)
                this.pos += match[0].length;
            return match;
        }
    }
    /**
    Get the current token.
    */
    current() { return this.string.slice(this.start, this.pos); }
}

function fullParser(spec) {
    return {
        token: spec.token,
        blankLine: spec.blankLine || (() => { }),
        startState: spec.startState || (() => true),
        copyState: spec.copyState || defaultCopyState,
        indent: spec.indent || (() => null),
        languageData: spec.languageData || {}
    };
}
function defaultCopyState(state) {
    if (typeof state != "object")
        return state;
    let newState = {};
    for (let prop in state) {
        let val = state[prop];
        newState[prop] = (val instanceof Array ? val.slice() : val);
    }
    return newState;
}
/**
A [language](https://codemirror.net/6/docs/ref/#language.Language) class based on a streaming
parser.
*/
class StreamLanguage extends stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.Language {
    constructor(parser) {
        let data = stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.defineLanguageFacet(parser.languageData);
        let p = fullParser(parser);
        let startParse = (input, startPos, context) => new Parse(this, input, startPos, context);
        super(data, { startParse }, docID(data), [stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.indentService.of((cx, pos) => this.getIndent(cx, pos))]);
        this.streamParser = p;
        this.stateAfter = new WeakMap;
    }
    static define(spec) { return new StreamLanguage(spec); }
    getIndent(cx, pos) {
        let tree = stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.syntaxTree(cx.state), at = tree.resolve(pos);
        while (at && at.type != this.topNode)
            at = at.parent;
        if (!at)
            return null;
        let start = findState(this, tree, 0, at.from, pos), statePos, state;
        if (start) {
            state = start.state;
            statePos = start.pos + 1;
        }
        else {
            state = this.streamParser.startState(cx.unit);
            statePos = 0;
        }
        if (pos - statePos > 10000 /* MaxIndentScanDist */)
            return null;
        while (statePos < pos) {
            let line = cx.state.doc.lineAt(statePos), end = Math.min(pos, line.to);
            if (line.length) {
                let stream = new StringStream(line.text, cx.state.tabSize, cx.unit);
                while (stream.pos < end - line.from)
                    readToken(this.streamParser.token, stream, state);
            }
            else {
                this.streamParser.blankLine(state, cx.unit);
            }
            if (end == pos)
                break;
            statePos = line.to + 1;
        }
        let { text } = cx.state.doc.lineAt(pos);
        return this.streamParser.indent(state, /^\s*(.*)/.exec(text)[1], cx);
    }
    get allowsNesting() { return false; }
}
function findState(lang, tree, off, startPos, before) {
    let state = off >= startPos && off + tree.length <= before && lang.stateAfter.get(tree);
    if (state)
        return { state: lang.streamParser.copyState(state), pos: off + tree.length };
    for (let i = tree.children.length - 1; i >= 0; i--) {
        let child = tree.children[i], pos = off + tree.positions[i];
        let found = child instanceof stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.Tree && pos < before && findState(lang, child, pos, startPos, before);
        if (found)
            return found;
    }
    return null;
}
function cutTree(lang, tree, from, to, inside) {
    if (inside && from <= 0 && to >= tree.length)
        return tree;
    if (!inside && tree.type == lang.topNode)
        inside = true;
    for (let i = tree.children.length - 1; i >= 0; i--) {
        let pos = tree.positions[i] + from, child = tree.children[i], inner;
        if (pos < to && child instanceof stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.Tree) {
            if (!(inner = cutTree(lang, child, from - pos, to - pos, inside)))
                break;
            return !inside ? inner
                : new stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.Tree(tree.type, tree.children.slice(0, i).concat(inner), tree.positions.slice(0, i + 1), pos + inner.length);
        }
    }
    return null;
}
function findStartInFragments(lang, fragments, startPos, state) {
    for (let f of fragments) {
        let found = f.from <= startPos && f.to > startPos && findState(lang, f.tree, 0 - f.offset, startPos, f.to), tree;
        if (found && (tree = cutTree(lang, f.tree, startPos + f.offset, found.pos + f.offset, false)))
            return { state: found.state, tree };
    }
    return { state: lang.streamParser.startState(stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.getIndentUnit(state)), tree: stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.Tree.empty };
}
class Parse {
    constructor(lang, input, startPos, context) {
        this.lang = lang;
        this.input = input;
        this.startPos = startPos;
        this.context = context;
        this.chunks = [];
        this.chunkPos = [];
        this.chunk = [];
        let { state, tree } = findStartInFragments(lang, context.fragments, startPos, context.state);
        this.state = state;
        this.pos = this.chunkStart = startPos + tree.length;
        if (tree.length) {
            this.chunks.push(tree);
            this.chunkPos.push(0);
        }
        if (this.pos < context.viewport.from - 100000 /* MaxDistanceBeforeViewport */) {
            this.state = this.lang.streamParser.startState(stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.getIndentUnit(context.state));
            context.skipUntilInView(this.pos, context.viewport.from);
            this.pos = context.viewport.from;
        }
    }
    advance() {
        let end = Math.min(this.context.viewport.to, this.input.length, this.chunkStart + 2048 /* ChunkSize */);
        while (this.pos < end)
            this.parseLine();
        if (this.chunkStart < this.pos)
            this.finishChunk();
        if (end < this.input.length && this.pos < this.context.viewport.to)
            return null;
        this.context.skipUntilInView(this.pos, this.input.length);
        return this.finish();
    }
    parseLine() {
        let line = this.input.lineAfter(this.pos), { streamParser } = this.lang;
        let stream = new StringStream(line, this.context ? this.context.state.tabSize : 4, stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.getIndentUnit(this.context.state));
        if (stream.eol()) {
            streamParser.blankLine(this.state, stream.indentUnit);
        }
        else {
            while (!stream.eol()) {
                let token = readToken(streamParser.token, stream, this.state);
                if (token)
                    this.chunk.push(tokenID(token), this.pos + stream.start, this.pos + stream.pos, 4);
            }
        }
        this.pos += line.length;
        if (this.pos < this.input.length)
            this.pos++;
    }
    finishChunk() {
        let tree = stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.Tree.build({
            buffer: this.chunk,
            start: this.chunkStart,
            length: this.pos - this.chunkStart,
            nodeSet,
            topID: 0,
            maxBufferLength: 2048 /* ChunkSize */
        });
        this.lang.stateAfter.set(tree, this.lang.streamParser.copyState(this.state));
        this.chunks.push(tree);
        this.chunkPos.push(this.chunkStart - this.startPos);
        this.chunk = [];
        this.chunkStart = this.pos;
    }
    finish() {
        return new stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.Tree(this.lang.topNode, this.chunks, this.chunkPos, this.pos - this.startPos).balance();
    }
    forceFinish() {
        return this.finish();
    }
}
function readToken(token, stream, state) {
    stream.start = stream.pos;
    for (let i = 0; i < 10; i++) {
        let result = token(stream, state);
        if (stream.pos > stream.start)
            return result;
    }
    throw new Error("Stream parser failed to advance stream.");
}
const tokenTable = /*@__PURE__*/Object.create(null);
const typeArray = [stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.NodeType.none];
const nodeSet = /*@__PURE__*/new stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.NodeSet(typeArray);
const warned = [];
function tokenID(tag) {
    return !tag ? 0 : tokenTable[tag] || (tokenTable[tag] = createTokenType(tag));
}
for (let [legacyName, name] of [
    ["variable", "variableName"],
    ["variable-2", "variableName.special"],
    ["string-2", "string.special"],
    ["def", "variableName.definition"],
    ["tag", "typeName"],
    ["attribute", "propertyName"],
    ["type", "typeName"],
    ["builtin", "variableName.standard"],
    ["qualifier", "modifier"],
    ["error", "invalid"],
    ["header", "heading"],
    ["property", "propertyName"]
])
    tokenTable[legacyName] = /*@__PURE__*/tokenID(name);
function warnForPart(part, msg) {
    if (warned.indexOf(part) > -1)
        return;
    warned.push(part);
    console.warn(msg);
}
function createTokenType(tagStr) {
    let tag = null;
    for (let part of tagStr.split(".")) {
        let value = stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.tags[part];
        if (!value) {
            warnForPart(part, `Unknown highlighting tag ${part}`);
        }
        else if (typeof value == "function") {
            if (!tag)
                warnForPart(part, `Modifier ${part} used at start of tag`);
            else
                tag = value(tag);
        }
        else {
            if (tag)
                warnForPart(part, `Tag ${part} used as modifier`);
            else
                tag = value;
        }
    }
    if (!tag)
        return 0;
    let name = tagStr.replace(/ /g, "_"), type = stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.NodeType.define({
        id: typeArray.length,
        name,
        props: [stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.styleTags({ [name]: tag })]
    });
    typeArray.push(type);
    return type.id;
}
function docID(data) {
    let type = stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.NodeType.define({ id: typeArray.length, name: "Document", props: [stencilaActionMenu_stencilaEditor_stencilaNodeList_entry.languageDataProp.add(() => data)] });
    typeArray.push(type);
    return type;
}

exports.StreamLanguage = StreamLanguage;
exports.StringStream = StringStream;
