import React from "react";
import { TableProperties } from "./../index";
import { Animation, TableColumnSizeMode, TableEditMode, TablePageSize, TableSelectionMode, TableSortMode, TableColumn, TableConditionalFormatting } from './../index';
export { TableProperties } from "./../index";
export { Animation, TableColumnDataType, TableColumnFreeze, TableColumnResponsivePriority, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableEditMode, TablePageSize, TableSelectionMode, TableSortMode, TableColumn, TableConditionalFormatting } from './../index';
export declare const Smart: any;
export interface TableProps extends TableProperties {
    className?: string;
    style?: React.CSSProperties;
    onCellBeginEdit?: ((event?: Event) => void) | undefined;
    onCellClick?: ((event?: Event) => void) | undefined;
    onCellEndEdit?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onColumnClick?: ((event?: Event) => void) | undefined;
    onFilter?: ((event?: Event) => void) | undefined;
    onGroup?: ((event?: Event) => void) | undefined;
    onPage?: ((event?: Event) => void) | undefined;
    onSort?: ((event?: Event) => void) | undefined;
}
/**
 Table is an alternative of the HTMLTableElement.
*/
export declare class Table extends React.Component<React.HTMLProps<Element> & TableProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
    *	Property type: boolean
    */
    get autoLoadState(): boolean;
    set autoLoadState(value: boolean);
    /** Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property.
    *	Property type: boolean
    */
    get autoSaveState(): boolean;
    set autoSaveState(value: boolean);
    /** Sets or gets the min width of columns when columnSizeMode is 'auto'.
    *	Property type: string | number
    */
    get columnMinWidth(): string | number;
    set columnMinWidth(value: string | number);
    /** Sets or gets whether the reordering of columns is enabled.
    *	Property type: boolean
    */
    get columnReorder(): boolean;
    set columnReorder(value: boolean);
    /** Describes the columns properties.
    *	Property type: TableColumn[]
    */
    get columns(): TableColumn[];
    set columns(value: TableColumn[]);
    /** Sets or gets details about conditional formatting to be applied to the Table's cells.
    *	Property type: TableConditionalFormatting[]
    */
    get conditionalFormatting(): TableConditionalFormatting[];
    set conditionalFormatting(value: TableConditionalFormatting[]);
    /** Sets or gets the column sizing behavior.
    *	Property type: TableColumnSizeMode
    */
    get columnSizeMode(): TableColumnSizeMode;
    set columnSizeMode(value: TableColumnSizeMode);
    /** Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options.
    *	Property type: boolean
    */
    get conditionalFormattingButton(): boolean;
    set conditionalFormattingButton(value: boolean);
    /** Determines the data source of the table component.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** A callback function that can be used to transform the initial dataSource records. If implemented, it is called once for each record (which is passed as an argument).
    *	Property type: any
    */
    get dataTransform(): any;
    set dataTransform(value: any);
    /** Disables the interaction with the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets whether the Table can be edited.
    *	Property type: boolean
    */
    get editing(): boolean;
    set editing(value: boolean);
    /** Sets or gets the edit mode.
    *	Property type: TableEditMode
    */
    get editMode(): TableEditMode;
    set editMode(value: TableEditMode);
    /** Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header.
    *	Property type: boolean
    */
    get filtering(): boolean;
    set filtering(value: boolean);
    /** Sets or gets whether the Table can be filtered via a filter row.
    *	Property type: boolean
    */
    get filterRow(): boolean;
    set filterRow(value: boolean);
    /** Sets or gets the id of an HTML template element to be applied as a custom filter template.
    *	Property type: string
    */
    get filterTemplate(): string;
    set filterTemplate(value: string);
    /** Sets or gets the id of an HTML template element to be applied as footer row(s).
    *	Property type: string
    */
    get footerRow(): string;
    set footerRow(value: string);
    /** Sets or gets whether the Table's footer is sticky/frozen.
    *	Property type: boolean
    */
    get freezeFooter(): boolean;
    set freezeFooter(value: boolean);
    /** Sets or gets whether the Table's column header is sticky/frozen.
    *	Property type: boolean
    */
    get freezeHeader(): boolean;
    set freezeHeader(value: boolean);
    /** Sets or gets whether grouping the Table is enabled.
    *	Property type: boolean
    */
    get grouping(): boolean;
    set grouping(value: boolean);
    /** Sets or gets the id of an HTML template element to be applied as additional column header(s).
    *	Property type: string
    */
    get headerRow(): string;
    set headerRow(value: string);
    /** Sets or gets whether navigation with the keyboard is enabled in the Table.
    *	Property type: boolean
    */
    get keyboardNavigation(): boolean;
    set keyboardNavigation(value: boolean);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** A callback function executed each time a Table cell is rendered.
    *	Property type: any
    */
    get onCellRender(): any;
    set onCellRender(value: any);
    /** A callback function executed each time a Table column header cell is rendered.
    *	Property type: { (dataField: string, headerCell: HTMLTableCellElement): void }
    */
    get onColumnRender(): {
        (dataField: string, headerCell: HTMLTableCellElement): void;
    };
    set onColumnRender(value: {
        (dataField: string, headerCell: HTMLTableCellElement): void;
    });
    /** A callback function executed when the Table is being initialized.
    *	Property type: { (): void }
    */
    get onInit(): {
        (): void;
    };
    set onInit(value: {
        (): void;
    });
    /** Sets or gets the page size (when paging is enabled).
    *	Property type: TablePageSize
    */
    get pageSize(): TablePageSize;
    set pageSize(value: TablePageSize);
    /** Sets or gets the current (zero-based) page index (when paging is enabled).
    *	Property type: number
    */
    get pageIndex(): number;
    set pageIndex(value: number);
    /** Sets or gets whether paging is enabled.
    *	Property type: boolean
    */
    get paging(): boolean;
    set paging(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it.
    *	Property type: string
    */
    get rowDetailTemplate(): string;
    set rowDetailTemplate(value: string);
    /** Sets or gets whether row selection (via checkboxes) is enabled.
    *	Property type: boolean
    */
    get selection(): boolean;
    set selection(value: boolean);
    /** Sets or gets the selection mode. Only applicable when selection is enabled.
    *	Property type: TableSelectionMode
    */
    get selectionMode(): TableSelectionMode;
    set selectionMode(value: TableSelectionMode);
    /** A callback function executed when a column is sorted that can be used to override the default sorting behavior. The function is passed four parameters: dataSource - the Table's data sourcesortColumns - an array of the data fields of columns to be sorted bydirections - an array of sort directions to be sorted by (corresponding to sortColumns)defaultCompareFunctions - an array of default compare functions to be sorted by (corresponding to sortColumns), useful if the sorting of some columns does not have to be overridden
    *	Property type: any
    */
    get sort(): any;
    set sort(value: any);
    /** Determines the sorting mode of the Table.
    *	Property type: TableSortMode
    */
    get sortMode(): TableSortMode;
    set sortMode(value: TableSortMode);
    /** Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState).
    *	Property type: string[]
    */
    get stateSettings(): string[];
    set stateSettings(value: string[]);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
    *	Property type: boolean
    */
    get tooltip(): boolean;
    set tooltip(value: boolean);
    get properties(): string[];
    /**  This event is triggered when a cell edit operation has been initiated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    */
    onCellBeginEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    */
    onCellClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a cell has been edited.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
    *   dataField - The data field of the cell's column.
    *   row - The new data of the cell's row.
    */
    onCellEndEdit?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the selection is changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the cell's column.
    */
    onColumnClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a filtering-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
    *   action - The filtering action. Possible actions: 'add', 'remove'.
    *   filters - The added filters. Only when action is 'add'.
    */
    onFilter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a grouping-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label)
    *   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
    *   dataField - The data field of the column whose grouping is modified.
    *   label - The label of the group (only when collapsing/expanding).
    */
    onGroup?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a paging-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action)
    *   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
    */
    onPage?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
    *   columns - An array with information about the columns the Table has been sorted by.
    */
    onSort?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get events(): string[];
    /** Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    addFilter(dataField: string, filter: any): void;
    /** Groups by a column.
    * @param {string} dataField. The column's data field.
    */
    addGroup(dataField: string): void;
    /** Begins an edit operation.
    * @param {string | number} row. The id of the row to edit.
    * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
    */
    beginEdit(row: string | number, dataField?: string): void;
    /** Ends the current edit operation and discards changes.
    */
    cancelEdit(): void;
    /** Clears applied filters.
    */
    clearFilters(): void;
    /** Clears grouping.
    */
    clearGrouping(): void;
    /** Clears selection.
    */
    clearSelection(): void;
    /** Clears the Table sorting.
    */
    clearSort(): void;
    /** Collapses all rows (in tree mode).
    */
    collapseAllRows(): void;
    /** Collapses a group.
    * @param {string} index. The group's hierarchical index.
    */
    collapseGroup(index: string): void;
    /** Collapses a row (in tree mode).
    * @param {string | number} rowId. The id of the row to collapse.
    */
    collapseRow(rowId: string | number): void;
    /** Ends the current edit operation and saves changes.
    */
    endEdit(): void;
    /** Expands all rows (in tree mode).
    */
    expandAllRows(): void;
    /** Expands a group.
    * @param {string} index. The group's hierarchical index.
    */
    expandGroup(index: string): void;
    /** Expands a row (in tree mode).
    * @param {string | number} rowId. The id of the row to expand.
    */
    expandRow(rowId: string | number): void;
    /** Exports the Table's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {boolean} exportFiltered?. If set to true, exports only filtered records
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: string, fileName?: string, exportFiltered?: boolean, callback?: Function): Promise<any>;
    /** Returns an array of selected row ids.
    * @returns {(string | number)[]}
  */
    getSelection(): Promise<any>;
    /** Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState.
    * @returns {any}
  */
    getState(): Promise<any>;
    /** Returns the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @returns {any}
  */
    getValue(row: string | number, dataField: string): Promise<any>;
    /** Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    loadState(state?: any): void;
    /** Navigates to a page.
    * @param {number} pageIndex. The zero-based page index to navigate to.
    */
    navigateTo(pageIndex: number): void;
    /** Refreshes the table.
    */
    refresh(): void;
    /** Removes filters applied to a specific column.
    * @param {string} dataField. The column's data field.
    */
    removeFilter(dataField: string): void;
    /** Removes grouping by a column.
    * @param {string} dataField. The column's data field.
    */
    removeGroup(dataField: string): void;
    /** Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property.
    * @returns {any}
  */
    saveState(): Promise<any>;
    /** Selects a row.
    * @param {string | number} rowId. The id of the row to select.
    */
    select(rowId: string | number): void;
    /** Sets the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @param {any} value. The new value of the cell.
    */
    setValue(row: string | number, dataField: string, value: any): void;
    /** Sorts the Table by a column.
    * @param {string} columnDataField. Column field name.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
    */
    sortBy(columnDataField: string, sortOrder?: string): void;
    /** Unselects a row.
    * @param {string | number} rowId. The id of the row to unselect.
    */
    unselect(rowId: string | number): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Table;
