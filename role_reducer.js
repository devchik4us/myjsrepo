import produce from 'immer';
import {
  ADD_VALIDATION_ERROR,
  ASSIGN_PERMISSION_LIST,
  ASSIGN_ROLES,
  ASYNC_END,
  ASYNC_START,
  CHANGE_FORM_FIELD,
  CLEAR_FORM,
  INITIATE_CLEAN,
  SET_FORM_METHOD,
  SET_FORM_VALUES,
  SET_ID,
  SET_INITIAL_VALUES,
  SET_KEYWORD,
  SET_PAGE_NUMBER,
  SET_PAGE_SIZE,
} from 'containers/Role/constants';

const EmptyFormField = {
  name: '',
  description: '',
  permissions: '',
};

export const initialState = {
  initialValues: EmptyFormField,
  formValues: {},
  keywords: '',
  pageNumber: 1,
  pageSize: 10,
  roles: {
    results: [],
    pageSize: 10,
    currentPage: 0,
    totalItems: 0,
    next: 0,
    previous: 0,
  },
  permissions: [],
  permissionList: {},
  errors: [],
  isLoading: false,
  initiateClean: false,
  formMethod: null,
  id: null,
};

const RoleReducer = produce((draft, action) => {
  switch (action.type) {
    case ASSIGN_ROLES:
      draft.roles = action.roles;
      draft.isLoading = false;
      break;
    case INITIATE_CLEAN:
      draft.initiateClean = true;
      break;
    case ASSIGN_PERMISSION_LIST:
      draft.permissionList = action.permissionList;
      break;
    case SET_FORM_METHOD:
      draft.formMethod = action.formMethod;
      break;
    case SET_PAGE_SIZE:
      draft.pageSize = action.pageSize;
      break;
    case SET_INITIAL_VALUES:
      draft.initialValues = action.initialValues;
      break;
    case SET_ID:
      draft.id = action.id;
      break;
    case SET_KEYWORD:
      draft.keywords = action.keywords;
      break;
    case CHANGE_FORM_FIELD:
      draft[action.key] = action.value;
      break;
    case SET_FORM_VALUES:
      draft.formValues = action.formValues;
      break;
    case SET_PAGE_NUMBER:
      draft.pageNumber = action.pageNumber;
      break;
    case ADD_VALIDATION_ERROR:
      draft.errors = action.errors;
      break;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
    case CLEAR_FORM:
      draft.keywords = '';
      draft.initialValues = EmptyFormField;
      draft.formValues = {};
      draft.errors = [];
      draft.permissions = [];
      draft.isLoading = false;
      draft.initiateClean = false;
      draft.formMethod = null;
      draft.id = null;
      break;
  }
}, initialState);

export default RoleReducer;
