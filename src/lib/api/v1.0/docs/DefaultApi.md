# DefaultApi

All URIs are relative to *http://13.209.69.235:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignBadgeToUser**](#assignbadgetouser) | **POST** /api/user-badges | 사용자에게 뱃지 부여|
|[**clearAllRecords**](#clearallrecords) | **DELETE** /api/test/records/clear | 사용자 일기 전체 삭제|
|[**createBadge**](#createbadge) | **POST** /api/badges | 뱃지 등록|
|[**createTestRecord**](#createtestrecord) | **GET** /api/test/records/create | 테스트 일기 생성|
|[**createTodayRecord**](#createtodayrecord) | **POST** /api/records | 오늘 일기 작성|
|[**createUser**](#createuser) | **POST** /api/users | 회원가입|
|[**deleteBadge**](#deletebadge) | **DELETE** /api/badges/{badgeId} | 뱃지 삭제|
|[**deleteQuiz**](#deletequiz) | **DELETE** /api/quizzes/{quizId} | 단일 퀴즈 삭제|
|[**deleteRecord**](#deleterecord) | **DELETE** /api/records/{recordId} | 일기 삭제|
|[**deleteTodayQuizzes**](#deletetodayquizzes) | **DELETE** /api/quizzes/today | 오늘 퀴즈 전체 삭제|
|[**deleteUser**](#deleteuser) | **DELETE** /api/users/{userNo} | 사용자 삭제|
|[**generateQuiz**](#generatequiz) | **POST** /api/quizzes/generate | 개별 퀴즈 생성 (개발용)|
|[**getAllBadges**](#getallbadges) | **GET** /api/badges | 뱃지 전체 조회|
|[**getAllRecordsByUser**](#getallrecordsbyuser) | **GET** /api/records/user/{userNo}/all | 사용자 전체 일기 목록 조회|
|[**getAllUsers**](#getallusers) | **GET** /api/users | 모든 사용자 조회|
|[**getBadge**](#getbadge) | **GET** /api/badges/{badgeId} | 특정 뱃지 조회|
|[**getCurrentUser**](#getcurrentuser) | **GET** /api/auth/me | 현재 사용자 정보 조회|
|[**getMonthlyEmotions**](#getmonthlyemotions) | **GET** /api/records/emotions/{userNo} | 월별 감정 데이터 조회|
|[**getMyAllRecords**](#getmyallrecords) | **GET** /api/records/all | 내 모든 일기 조회|
|[**getNextRetryQuiz**](#getnextretryquiz) | **GET** /api/quizzes/today/retry-next | 다음 재시도 퀴즈 조회|
|[**getRecordByDate**](#getrecordbydate) | **GET** /api/records/{date} | 특정 날짜 일기 조회|
|[**getRecordList**](#getrecordlist) | **GET** /api/test/records/list | 사용자 일기 목록 조회|
|[**getStreakCount**](#getstreakcount) | **GET** /api/users/{userNo}/streak | 사용자 스트릭 수 조회|
|[**getTodayQuizResultSummary**](#gettodayquizresultsummary) | **GET** /api/quizzes/today/result | 오늘 퀴즈 결과 요약|
|[**getTodayQuizzes**](#gettodayquizzes) | **GET** /api/quizzes/today | 오늘의 퀴즈 생성|
|[**getTodayRecord**](#gettodayrecord) | **GET** /api/test/records/today | 오늘 일기 확인|
|[**getTodayRecordStatus**](#gettodayrecordstatus) | **GET** /api/records/today | 오늘 기록 상태 조회|
|[**getTodaySkipStatus**](#gettodayskipstatus) | **GET** /api/quizzes/today/skip-status | 오늘 스킵 상태 조회|
|[**getTodayWrongQuizzes**](#gettodaywrongquizzes) | **GET** /api/quizzes/today/wrong | 오늘 오답 퀴즈 조회|
|[**getUserById**](#getuserbyid) | **GET** /api/users/{userNo} | 사용자 조회|
|[**getUserByNickname**](#getuserbynickname) | **GET** /api/users/nickname/{nickname} | 닉네임으로 사용자 조회|
|[**increaseStreakCount**](#increasestreakcount) | **POST** /api/users/{userNo}/streak | 스트릭 카운트 증가|
|[**kakaoLogin**](#kakaologin) | **POST** /api/auth/kakao-login | 카카오 로그인|
|[**login**](#login) | **POST** /api/auth/login | 일반 로그인|
|[**logout**](#logout) | **POST** /api/auth/logout | 로그아웃|
|[**submitQuiz**](#submitquiz) | **POST** /api/quizzes/submit | 퀴즈 정답 제출|
|[**updateBadge**](#updatebadge) | **PUT** /api/badges/{badgeId} | 뱃지 수정|
|[**updateRecord**](#updaterecord) | **PUT** /api/records/{recordId} | 일기 수정|
|[**updateUser**](#updateuser) | **PUT** /api/users/{userNo} | 사용자 정보 수정|

# **assignBadgeToUser**
> object assignBadgeToUser(userBadgeRequest)

특정 사용자에게 뱃지를 부여합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserBadgeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userBadgeRequest: UserBadgeRequest; //

const { status, data } = await apiInstance.assignBadgeToUser(
    userBadgeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userBadgeRequest** | **UserBadgeRequest**|  | |


### Return type

**object**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 뱃지 부여 성공 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clearAllRecords**
> string clearAllRecords()

특정 사용자의 모든 일기를 삭제합니다. (개발용)

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (default to undefined)

const { status, data } = await apiInstance.clearAllRecords(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 | defaults to undefined|


### Return type

**string**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBadge**
> BadgeResponse createBadge(badgeRequest)

새로운 뱃지를 등록합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BadgeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let badgeRequest: BadgeRequest; //

const { status, data } = await apiInstance.createBadge(
    badgeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **badgeRequest** | **BadgeRequest**|  | |


### Return type

**BadgeResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 뱃지 등록 성공 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTestRecord**
> string createTestRecord()

개발용 더미 일기를 생성합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (default to undefined)

const { status, data } = await apiInstance.createTestRecord(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 | defaults to undefined|


### Return type

**string**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTodayRecord**
> object createTodayRecord(recordCreateRequest)

오늘 날짜로 새 일기를 작성합니다. JWT 비활성화 시 userNo 파라미터 필요.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RecordCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordCreateRequest: RecordCreateRequest; //
let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.createTodayRecord(
    recordCreateRequest,
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordCreateRequest** | **RecordCreateRequest**|  | |
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 일기 작성 성공 |  -  |
|**400** | 잘못된 요청 또는 이미 작성된 일기 |  -  |
|**401** | 인증 실패 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUser**
> Response createUser(createRequest)

새로운 사용자를 생성합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createRequest: CreateRequest; //

const { status, data } = await apiInstance.createUser(
    createRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRequest** | **CreateRequest**|  | |


### Return type

**Response**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 회원가입 성공 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBadge**
> deleteBadge()

뱃지를 삭제합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let badgeId: number; //뱃지 ID (default to undefined)

const { status, data } = await apiInstance.deleteBadge(
    badgeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **badgeId** | [**number**] | 뱃지 ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteQuiz**
> deleteQuiz()

특정 퀴즈를 삭제합니다. 본인이 생성한 퀴즈만 삭제 가능합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let quizId: number; //삭제할 퀴즈 ID (default to undefined)
let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.deleteQuiz(
    quizId,
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **quizId** | [**number**] | 삭제할 퀴즈 ID | defaults to undefined|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | 퀴즈 삭제 성공 |  -  |
|**403** | 삭제 권한 없음 |  -  |
|**404** | 존재하지 않는 퀴즈 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRecord**
> object deleteRecord()

지정된 일기를 삭제합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: number; //삭제할 일기 ID (default to undefined)
let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.deleteRecord(
    recordId,
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**number**] | 삭제할 일기 ID | defaults to undefined|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTodayQuizzes**
> deleteTodayQuizzes()

오늘 생성된 모든 퀴즈를 삭제합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.deleteTodayQuizzes(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | 오늘 퀴즈 전체 삭제 성공 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
> deleteUser()

사용자를 삭제합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (default to undefined)

const { status, data } = await apiInstance.deleteUser(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateQuiz**
> QuizResponse generateQuiz(questionSeed)

특정 질문 시드를 기반으로 GPT를 이용해 퀴즈를 생성합니다. 개발 및 테스트용입니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    QuestionSeed
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let questionSeed: QuestionSeed; //

const { status, data } = await apiInstance.generateQuiz(
    questionSeed
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **questionSeed** | **QuestionSeed**|  | |


### Return type

**QuizResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 퀴즈 생성 성공 |  -  |
|**400** | 잘못된 질문 시드 데이터 |  -  |
|**500** | GPT API 호출 실패 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllBadges**
> Array<BadgeResponse> getAllBadges()

모든 뱃지 목록을 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAllBadges();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BadgeResponse>**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllRecordsByUser**
> object getAllRecordsByUser()

특정 사용자의 모든 일기를 최신순으로 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //조회할 사용자 번호 (default to undefined)

const { status, data } = await apiInstance.getAllRecordsByUser(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 조회할 사용자 번호 | defaults to undefined|


### Return type

**object**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 일기 목록 조회 성공 |  -  |
|**404** | 사용자를 찾을 수 없음 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllUsers**
> Array<Response> getAllUsers()

모든 사용자 목록을 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAllUsers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Response>**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBadge**
> BadgeResponse getBadge()

뱃지 ID로 특정 뱃지를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let badgeId: number; //뱃지 ID (default to undefined)

const { status, data } = await apiInstance.getBadge(
    badgeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **badgeId** | [**number**] | 뱃지 ID | defaults to undefined|


### Return type

**BadgeResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrentUser**
> UserInfo getCurrentUser()

JWT 토큰으로 현재 사용자 정보를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getCurrentUser();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserInfo**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 사용자 정보 조회 성공 |  -  |
|**401** | 인증 실패 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMonthlyEmotions**
> object getMonthlyEmotions()

특정 월의 감정 데이터를 조회합니다. 기존 API를 활용하여 월별 필터링을 수행합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //조회할 사용자 번호 (default to undefined)
let year: number; //조회할 연도 (default to undefined)
let month: number; //조회할 월 (default to undefined)

const { status, data } = await apiInstance.getMonthlyEmotions(
    userNo,
    year,
    month
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 조회할 사용자 번호 | defaults to undefined|
| **year** | [**number**] | 조회할 연도 | defaults to undefined|
| **month** | [**number**] | 조회할 월 | defaults to undefined|


### Return type

**object**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 월별 감정 데이터 조회 성공 |  -  |
|**400** | 잘못된 요청 |  -  |
|**404** | 사용자를 찾을 수 없음 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyAllRecords**
> object getMyAllRecords()

현재 로그인된 사용자의 모든 일기를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.getMyAllRecords(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNextRetryQuiz**
> QuizResponse getNextRetryQuiz()

오답이거나 건너뛴 퀴즈 중 다음으로 재시도할 퀴즈 1개를 반환합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.getNextRetryQuiz(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**QuizResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 재시도 퀴즈 반환 |  -  |
|**204** | 더 이상 재시도할 퀴즈가 없음 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecordByDate**
> object getRecordByDate()

지정된 날짜의 일기를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let date: string; //조회할 날짜 (YYYY-MM-DD) (default to undefined)
let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.getRecordByDate(
    date,
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | 조회할 날짜 (YYYY-MM-DD) | defaults to undefined|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecordList**
> Array<Record> getRecordList()

특정 사용자의 모든 일기를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (default to undefined)

const { status, data } = await apiInstance.getRecordList(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 | defaults to undefined|


### Return type

**Array<Record>**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStreakCount**
> StreakCountResponse getStreakCount()

사용자의 현재 streakCount를 반환합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; // (default to undefined)

const { status, data } = await apiInstance.getStreakCount(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] |  | defaults to undefined|


### Return type

**StreakCountResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTodayQuizResultSummary**
> QuizResultSummary getTodayQuizResultSummary()

오늘 풀었던 퀴즈의 총 문항 수와 정답 수를 요약해서 반환합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.getTodayQuizResultSummary(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**QuizResultSummary**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 퀴즈 결과 요약 반환 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTodayQuizzes**
> Array<QuizResponse> getTodayQuizzes()

최근 3일간의 일기 기록을 바탕으로 오늘의 회상 퀴즈 2개를 생성합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.getTodayQuizzes(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**Array<QuizResponse>**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 퀴즈 생성 성공 |  -  |
|**401** | 인증 실패 |  -  |
|**404** | 퀴즈 생성을 위한 충분한 기록이 없음 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTodayRecord**
> string getTodayRecord()

오늘 작성된 일기가 있는지 확인합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (default to undefined)

const { status, data } = await apiInstance.getTodayRecord(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 | defaults to undefined|


### Return type

**string**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTodayRecordStatus**
> object getTodayRecordStatus()

오늘 일기 작성 상태를 확인합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.getTodayRecordStatus(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTodaySkipStatus**
> SkipStatusResponse getTodaySkipStatus()

오늘 건너뛴 퀴즈 횟수와 남은 건너뛰기 가능 횟수를 조회합니다. (하루 최대 2회)

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.getTodaySkipStatus(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**SkipStatusResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 스킵 상태 조회 성공 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTodayWrongQuizzes**
> Array<QuizResponse> getTodayWrongQuizzes()

오늘 풀었던 퀴즈 중 틀렸거나 건너뛴 퀴즈들을 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.getTodayWrongQuizzes(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**Array<QuizResponse>**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 오답 퀴즈 조회 성공 |  -  |
|**204** | 오답 퀴즈가 없음 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserById**
> Response getUserById()

사용자 번호로 사용자 정보를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (default to undefined)

const { status, data } = await apiInstance.getUserById(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] | 사용자 번호 | defaults to undefined|


### Return type

**Response**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserByNickname**
> Response getUserByNickname()

닉네임으로 사용자 정보를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let nickname: string; //사용자 닉네임 (default to undefined)

const { status, data } = await apiInstance.getUserByNickname(
    nickname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nickname** | [**string**] | 사용자 닉네임 | defaults to undefined|


### Return type

**Response**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **increaseStreakCount**
> UserBadgeResponse increaseStreakCount()

사용자의 연속 일기 작성 카운트를 증가시킵니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; // (default to undefined)

const { status, data } = await apiInstance.increaseStreakCount(
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userNo** | [**number**] |  | defaults to undefined|


### Return type

**UserBadgeResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kakaoLogin**
> LoginResponse kakaoLogin(kakaoLoginRequest)

카카오 계정으로 로그인 또는 자동 회원가입합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    KakaoLoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let kakaoLoginRequest: KakaoLoginRequest; //

const { status, data } = await apiInstance.kakaoLogin(
    kakaoLoginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kakaoLoginRequest** | **KakaoLoginRequest**|  | |


### Return type

**LoginResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 카카오 로그인 성공 |  -  |
|**400** | 카카오 로그인 실패 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login**
> LoginResponse login(loginRequest)

닉네임과 비밀번호로 로그인합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.login(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**LoginResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 로그인 성공 |  -  |
|**400** | 로그인 실패 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout**
> LoginResponse logout()

현재 세션을 종료합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.logout();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LoginResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitQuiz**
> submitQuiz(quizSubmitRequest)

퀴즈의 정답을 제출하거나 건너뛰기를 처리합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    QuizSubmitRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let quizSubmitRequest: QuizSubmitRequest; //

const { status, data } = await apiInstance.submitQuiz(
    quizSubmitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **quizSubmitRequest** | **QuizSubmitRequest**|  | |


### Return type

void (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 정답 제출 성공 |  -  |
|**400** | 잘못된 요청 데이터 또는 건너뛰기 횟수 초과 |  -  |
|**404** | 존재하지 않는 퀴즈 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBadge**
> BadgeResponse updateBadge(badgeRequest)

기존 뱃지 정보를 수정합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BadgeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let badgeId: number; //뱃지 ID (default to undefined)
let badgeRequest: BadgeRequest; //

const { status, data } = await apiInstance.updateBadge(
    badgeId,
    badgeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **badgeRequest** | **BadgeRequest**|  | |
| **badgeId** | [**number**] | 뱃지 ID | defaults to undefined|


### Return type

**BadgeResponse**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRecord**
> object updateRecord(recordCreateRequest)

기존 일기를 수정합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RecordCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: number; //수정할 일기 ID (default to undefined)
let recordCreateRequest: RecordCreateRequest; //
let userNo: number; //사용자 번호 (JWT 비활성화 시 필수) (optional) (default to undefined)

const { status, data } = await apiInstance.updateRecord(
    recordId,
    recordCreateRequest,
    userNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordCreateRequest** | **RecordCreateRequest**|  | |
| **recordId** | [**number**] | 수정할 일기 ID | defaults to undefined|
| **userNo** | [**number**] | 사용자 번호 (JWT 비활성화 시 필수) | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
> Response updateUser(updateRequest)

사용자 정보를 수정합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userNo: number; //사용자 번호 (default to undefined)
let updateRequest: UpdateRequest; //

const { status, data } = await apiInstance.updateUser(
    userNo,
    updateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRequest** | **UpdateRequest**|  | |
| **userNo** | [**number**] | 사용자 번호 | defaults to undefined|


### Return type

**Response**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

