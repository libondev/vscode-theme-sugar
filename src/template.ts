export const getTemplate = (colors: any) => {
  if (colors.mode === 'light') {
    [colors.white, colors.black] = [colors.black, colors.white]
  }

  const {
    name,
    mode,
    white,
    black,
    accent,
    border,
    foreground,
    background,
    inactiveBorder,
    listBackground,
    inputForeground,
    inputBackground,
    ...theme
  } = colors;

  return `{
  "name": "${name}",
  "base": "vs-${mode}",
  "colors": {
    "activityBar.activeBorder": "${accent}",
    "activityBar.background": "${background}",
    "activityBar.border": "${border}",
    "activityBar.foreground": "${foreground}",
    "activityBar.inactiveForeground": "${inactiveBorder}",
    "activityBarBadge.background": "${accent}",
    "activityBarBadge.foreground": "${inputForeground}",
    "badge.background": "${inputBackground}",
    "badge.foreground": "${inputForeground}",
    "button.border": "#0000",
    "button.background": "${accent}",
    "button.foreground": "${inputForeground}",
    "button.hoverBackground": "${accent}e3",
    "button.secondaryBackground": "${inputBackground}",
    "button.secondaryForeground": "${inputForeground}",
    "button.secondaryHoverBackground": "${border}",
    "checkbox.background": "${inputBackground}",
    "checkbox.border": "${border}",
    "debugToolBar.background": "${background}",
    "dropdown.background": "${inputBackground}",
    "dropdown.border": "${border}",
    "dropdown.foreground": "${inputForeground}",
    "dropdown.listBackground": "${listBackground}",
    "editor.background": "${background}",
    "editor.foreground": "${foreground}",
    "editorGroupHeader.tabsBackground": "${background}",
    "editorGroupHeader.tabsBorder": "${border}",
    "editorGutter.addedBackground": "#16a34a",
    "editorGutter.deletedBackground": "#dc2626",
    "editorGutter.modifiedBackground": "#0891b2",
    "editorLineNumber.activeForeground": "${foreground}88",
    "editorLineNumber.foreground": "${foreground}50",
    "errorForeground": "#dc2626",
    "focusBorder": "${accent}",
    "foreground": "${inputForeground}",
    "icon.foreground": "${inputForeground}",
    "input.background": "${inputBackground}",
    "input.border": "${border}",
    "input.foreground": "${inputForeground}",
    "input.placeholderForeground": "${border}",
    "inputOption.activeBackground": "${accent}88",
    "inputOption.activeBorder": "${accent}",
    "inputOption.activeForeground": "${white}",
    "list.activeSelectionForeground": "${white}",
    "list.activeSelectionBackground": "${accent}88",
    "list.activeSelectionIconForeground": "${white}",
    "list.hoverBackground": "${border}",
    "menu.border": "${border}",
    "menu.background": "${listBackground}",
    "menu.foreground": "${inputForeground}",
    "menu.selectionBackground": "${accent}",
		"menu.selectionForeground": "${white}",
    "notificationCenterHeader.background": "${listBackground}",
    "notificationCenterHeader.foreground": "${inputForeground}",
    "notifications.border": "${border}",
    "notifications.background": "${listBackground}",
    "notifications.foreground": "${inputForeground}",
    "panel.background": "${background}",
    "panel.border": "${border}",
    "panelInput.border": "${border}",
    "panelTitle.activeBorder": "${accent}",
    "panelTitle.activeForeground": "${inputForeground}",
    "panelTitle.inactiveForeground": "${inactiveBorder}",
    "peekViewResult.background": "${listBackground}",
    "pickerGroup.border": "${border}",
    "progressBar.background": "${accent}",
    "quickInput.background": "${background}",
    "quickInput.foreground": "${inputForeground}",
    "quickInputList.focusBackground": "${accent}88",
    "settings.dropdownBackground": "${inputBackground}",
    "settings.dropdownBorder": "${border}",
    "settings.headerForeground": "${foreground}",
    "settings.numberInputBorder": "${border}",
		"settings.textInputBorder": "${border}",
    "sideBar.border": "${border}",
    "sideBar.background": "${background}",
    "sideBar.foreground": "${foreground}",
    "sideBarSectionHeader.background": "#0000",
    "sideBarSectionHeader.border": "${border}",
    "sideBarSectionHeader.foreground": "${inputForeground}",
    "sideBarTitle.foreground": "${inputForeground}",
    "statusBar.background": "${background}",
    "statusBar.border": "${border}",
    "statusBar.debuggingBackground": "${accent}88",
    "statusBar.debuggingForeground": "${foreground}",
    "statusBar.focusBorder": "${accent}",
    "statusBar.foreground": "${inputForeground}",
    "statusBar.noFolderBackground": "${listBackground}",
    "statusBarItem.errorBackground": "${background}",
    "statusBarItem.focusBorder": "${accent}",
    "statusBarItem.remoteBackground": "${accent}",
    "statusBarItem.remoteForeground": "${foreground}",
    "tab.activeBackground": "${inputBackground}",
    "tab.activeBorder": "#0000",
    "tab.activeBorderTop": "${accent}",
    "tab.activeForeground": "${foreground}",
    "tab.border": "${border}",
    "tab.hoverBackground": "${background}",
    "tab.inactiveBackground": "${background}",
    "tab.inactiveForeground": "${inactiveBorder}",
    "tab.lastPinnedBorder": "${foreground}33",
    "tab.unfocusedActiveBorder": "${listBackground}",
    "tab.unfocusedActiveBorderTop": "${border}",
    "tab.unfocusedHoverBackground": "${listBackground}",
    "terminal.foreground": "${foreground}",
    "terminal.selectionBackground": "${accent}55",
    "terminal.tab.activeBorder": "${accent}",
    "terminalCursor.foreground": "${accent}",
    "textBlockQuote.background": "${border}",
    "textCodeBlock.background": "${border}",
    "textLink.activeForeground": "${accent}",
    "textLink.foreground": "${accent}",
    "textPreformat.background": "${border}",
    "titleBar.border": "#0000",
    "titleBar.activeBackground": "${background}",
    "titleBar.activeForeground": "${inputForeground}",
    "titleBar.inactiveBackground": "${background}",
    "titleBar.inactiveForeground": "${inactiveBorder}",
    "welcomePage.progress.foreground": "${accent}",
    "welcomePage.tileBackground": "${border}"
  },
  "semanticHighlighting": true,
  "tokenColors": [
    {
      "scope": [
        "comment",
        "string.comment",
        "punctuation.definition.comment"
      ],
      "settings": {
        "foreground": "${theme.comment}"
      }
    },
    {
      "scope": [
        "support",
        "property",
        "variable",
        "identifier",
        "attribute.name",
        "meta.property-name",
        "meta.object-literal.key"
      ],
      "settings": {
        "foreground": "${theme.variable}"
      }
    },
    {
      "scope": [
        "support.variable",
        "variable.language"
      ],
      "settings": {
        "foreground": "${theme.this}"
      }
    },
    {
      "scope": [
        "constant",
        "entity.name.constant",
        "meta.definition.variable"
      ],
      "settings": {
        "foreground": "${theme.constant}"
      }
    },
    {
      "scope":[
        "string",
        "meta.embedded.assembly",
				"meta.attribute-selector.scss",
        "string punctuation.section.embedded source"
      ],
      "settings": {
        "foreground": "${theme.string}"
      }
    },
    {
      "scope": [
        "constant.language",
        "support.type.builtin",
        "meta.module-reference"
      ],
      "settings": {
        "foreground": "${theme.boolean}"
      }
    },
    {
      "scope": [
        "number",
        "constant.numeric",
        "keyword.other.unit",
        "entity.other.keyframe-offset"
      ],
      "settings": {
        "foreground": "${theme.number}"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name",
        "constant.character.escape",
        "support.type.custom-property",
        "invalid.deprecated.entity.other.attribute-name",
        "support.constant.property-value"
      ],
      "settings": {
        "foreground": "${theme.attribute}"
      }
    },
    {
      "scope": [
        "meta.jsx.children",
        "keyword.operator",
        "constant.other.color",
        "storage.type.function.arrow",
        "punctuation.separator.key-value",
        "punctuation.definition.typeparameters",
        "punctuation.section.function",
        "punctuation.definition.group.begin.less",
        "punctuation.definition.group.end.less",
        "punctuation.definition.parameters.begin.bracket.round.css",
        "punctuation.definition.parameters.end.bracket.round.css",
        "punctuation.definition.attribute-selector.begin.bracket.square.scss",
				"punctuation.definition.attribute-selector.end.bracket.square.scss"
      ],
      "settings": {
        "foreground": "${foreground}"
      }
    },
    {
			"scope": [
				"source.coffee.embedded",
				"support.type.property-name.css",
				"support.type.property-name.less",
        "support.type.vendor-prefix.less",
        "support.type.vendored.property-name.css",
        "meta.property-value.css",
        "entity.other.attribute-name.scss",
        "keyword.other.keyframe-selector.less",
        "support.type.property-name.media",
        "meta.at-rule.media.header.css",
        "entity.name.function.scss",
        "meta.at-rule.keyframe.less"
			],
			"settings": {
				"foreground": "${theme.css}"
			}
    },
    {
      "scope": [
        "constant.language.null",
        "constant.language.undefined",
        "keyword.operator.or.regexp",
        "keyword.control.anchor.regexp",
        "constant.language.import-export-all.ts",
        "punctuation.definition.character-class.regexp"
      ],
      "settings": {
        "foreground": "${theme.nil}"
      }
    },
    {
      "scope": [
        "entity.name.tag",
        "support.class.component",
        "support.type.property-name.json"
      ],
      "settings": {
        "foreground": "${theme.tag}"
      }
    },
    {
      "scope": [
        "keyword",
        "storage.type",
        "storage.modifier",
        "keyword.operator.new",
        "storage.type.class.jsdoc",
        "keyword.operator.expression",
        "support.type.object.module.js",
        "punctuation.definition.template-expression"
      ],
      "settings": {
        "foreground": "${theme.keyword}"
      }
    },
    {
      "scope": "punctuation.definition.group",
      "settings": {
        "foreground": "#D16969"
      }
    },
    {
      "scope": [
        "support.function",
        "entity.name.function",
        "variable.language.super",
        "support.constant.handlebars",
				"entity.name.operator.custom-literal",
				"source.powershell variable.other.member"
      ],
      "settings": {
        "foreground": "${theme.function}"
      }
    },
    {
      "scope": [
        "support.class",
        "entity.name.type.class",
        "entity.name.type.module",
        "entity.other.inherited-class"
      ],
      "settings": {
        "foreground": "${theme.class}"
      }
    },
    {
      "scope": [
        "support.type",
        "meta.type.parameters",
        "entity.name.type.enum",
        "entity.name.type.interface",
				"entity.name.type.parameter",
				"meta.function,meta.type.annotation",
				"entity.name.type.module,meta.namespace.declaration"
      ],
      "settings": {
        "foreground": "${theme.tsType}"
      }
    },
    {
      "scope": [
        "support.type.primitive",
        "keyword.operator.quantifier.regexp"
      ],
      "settings": {
        "foreground": "${theme.tsBaseType}"
      }
    },
    {
      "scope": "markup.strikethrough",
      "settings": {
        "fontStyle": "strikethrough"
      }
    },
    {
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": "markup.heading",
      "settings": {
        "foreground": "${accent}"
      }
    },
    {
      "scope": [
        "markup.underline.link",
        "variable.other.link.underline",
        "punctuation.definition.list.begin.markdown"
      ],
      "settings": {
        "foreground": "${accent}df"
      }
    }
  ]
}`
}