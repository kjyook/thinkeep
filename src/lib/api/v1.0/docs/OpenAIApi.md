# OpenAIApi

All URIs are relative to *http://13.209.69.235:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**testOpenAi**](#testopenai) | **GET** /api/test/openai | OpenAI API 연결 테스트|

# **testOpenAi**
> string testOpenAi()

ChatGPT API와의 연결 상태를 확인합니다. 개발 및 디버깅용입니다.

### Example

```typescript
import {
    OpenAIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpenAIApi(configuration);

const { status, data } = await apiInstance.testOpenAi();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | OpenAI API 연결 성공 및 응답 반환 |  -  |
|**500** | OpenAI API 호출 실패 또는 네트워크 오류 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

