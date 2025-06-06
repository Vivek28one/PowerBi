import { BarChart, LineChart, PieChart, TrendingUp, AlertTriangle, Bell, Calendar, FileText, CircleHelp, Pen, PenLine, UserRoundPlus, Blocks } from 'lucide-react'

export const riskManagementData = {
  title: "Risk Management",
  cards: [
    {
      "title": "Supplier Performance Unit Failed",
      "Units_Failed_NonBlank": 19065.0,
      "Units_Failed_MOM__Changes": "-87% from last month "
    },
    {
      "title": "Supplier Performance Unit Failed",
      "Units_Failed_NonBlank": 19065.0,
      "Units_Failed_MOM__Changes": "-87% from last month "
    },
    {
      "title": "Supplier Performance Unit Failed",
      "Units_Failed_NonBlank": 19065.0,
      "Units_Failed_MOM__Changes": "-87% from last month "
    },
    {
      "title": "Supplier Performance Unit Failed",
      "Units_Failed_NonBlank": 19065.0,
      "Units_Failed_MOM__Changes": "-87% from last month "
    },
    // {
    //   "title": "Supplier Performance Unit Failed Rate",
    //   "Units_Fail_Rate": 0.0747447739426349,
    //   "Units_Fail_Rate_MOM__Changes": "-19%from last month"
    // }
  ]
}

export const recommendationData = {
  title: "Recommendation",
  cards: [
    {
      id: "7553316c-e7db-46b9-aa1d-4c0e64337684"
    },
    {
      id: "7553316c-e7db-46b9-aa1d-4c0e64337684"
    },
    {
      id: "7553316c-e7db-46b9-aa1d-4c0e64337684"
    },
    {
      id: "7553316c-e7db-46b9-aa1d-4c0e64337684"
    }
  ]
}

export const chartData = {
  title: "Chart",
  "rows": [
    {
      "Dates[Date]": "2025-06-01T00:00:00",
      "[Inspections_Passed]": 13,
      "[Inspections_CommPassed]": 2
    },
    {
      "Dates[Date]": "2025-06-02T00:00:00",
      "[Inspections_Passed]": 27,
      "[Inspections_CommPassed]": 4
    },
    {
      "Dates[Date]": "2025-06-03T00:00:00",
      "[Inspections_Passed]": 28,
      "[Inspections_CommPassed]": 10,
      "[Inspections_Failed]": 6
    },
    {
      "Dates[Date]": "2025-06-04T00:00:00",
      "[Inspections_Passed]": 33,
      "[Inspections_CommPassed]": 3,
      "[Inspections_Failed]": 4
    },
    {
      "Dates[Date]": "2025-06-05T00:00:00",
      "[Inspections_Passed]": 11,
      "[Inspections_Failed]": 3
    }
  ]
}


export const quickAccessData = {
  title: "Quick Access",
  cards: [
    {
      id: 1,
      logo: CircleHelp,
      title: "Support",
      description: "Submit feedback form",
    },
    {
      id: 2,
      logo: PenLine,
      title: "Build Your Report",
      description: "Create your own report via AI tools",
    },
    {
      id: 3,
      logo: UserRoundPlus,
      title: "Invite Team Member",
      description: "Invite members and start collaborating",
    },
    {
      id: 4,
      logo: Blocks,
      title: "Add integrations",
      description: "Get AI insights on your reports",
    }
  ]
}

export const powerBiConfig = {
  dashboardId: '1d469643-e9dd-4cf0-832e-fb70df5d28d0',
  embedUrl: 'https://app.powerbi.com/embed?dashboardId=1d469643-e9dd-4cf0-832e-fb70df5d28d0&tileId=c7d21513-4111-47f3-8ff7-b772dc6b76ff',
  accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSIsImtpZCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZjc1MzI1MDgtNDYyYS00ZTA0LTg0YWYtMDAwYzg1MmVhNThmLyIsImlhdCI6MTc0OTE5Mjg0NiwibmJmIjoxNzQ5MTkyODQ2LCJleHAiOjE3NDkxOTc4MjMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWFFBaS84WkFBQUE4OFlVb3A1UUhwUGdFcVBBYXNMQXJwNWlvRmZYL2JzNTJFengxbkdid29KTUFIKzJLcEM0M0orSFlzM0RoSDZhWTlGY0tuVlNPb0JEWHVkUXhudzloOW96WXBWWGgwRDJMT0w5a2M3MWRQYmtlNUFWcDgyQU9NUnBhYWNQckJNMXZMUXhKc2dqMzZ2STN1YUlqYzBCdUE9PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIxOGZiY2ExNi0yMjI0LTQ1ZjYtODViMC1mN2JmMmIzOWIzZjMiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ikt1bWFyIiwiZ2l2ZW5fbmFtZSI6IlZpdmVrIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTgwLjE1MS45NS40NiIsIm5hbWUiOiJWaXZlayBLdW1hciIsIm9pZCI6ImVjNGZhMDIyLTRkMzMtNDA2ZS1hMmMwLWM5NThmZWUxNGQyMyIsInB1aWQiOiIxMDAzMjAwNDI4MjQxNkMxIiwicmgiOiIxLkFWWUFDQ1ZUOXlwR0JFNkVyd0FNaFM2bGp3a0FBQUFBQUFBQXdBQUFBQUFBQUFDZUFCcFdBQS4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb25uZWN0aW9uLlJlYWQuQWxsIENvbm5lY3Rpb24uUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBJdGVtLkV4ZWN1dGUuQWxsIEl0ZW0uRXh0ZXJuYWxEYXRhU2hhcmUuQWxsIEl0ZW0uUmVhZFdyaXRlLkFsbCBJdGVtLlJlc2hhcmUuQWxsIE9uZUxha2UuUmVhZC5BbGwgT25lTGFrZS5SZWFkV3JpdGUuQWxsIFBpcGVsaW5lLkRlcGxveSBQaXBlbGluZS5SZWFkLkFsbCBQaXBlbGluZS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFJlcHJ0LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGFnLlJlYWQuQWxsIFRlbmFudC5SZWFkLkFsbCBUZW5hbnQuUmVhZFdyaXRlLkFsbCBVc2VyU3RhdGUuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuR2l0Q29tbWl0LkFsbCBXb3Jrc3BhY2UuR2l0VXBkYXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzaWQiOiIwMDViZTM4OS04NTk0LWYyZGItYTNiZi01YWJlZmNkYmM4OTgiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiI4WXRRTHBOUC1wMGgwYUpHbUtTN2hDMGhRcURrNUlkR2gzeTNSa3JqeGhnIiwidGlkIjoiZjc1MzI1MDgtNDYyYS00ZTA0LTg0YWYtMDAwYzg1MmVhNThmIiwidW5pcXVlX25hbWUiOiJWaXZlay5LdW1hckAyOG9uZS5jb20iLCJ1cG4iOiJWaXZlay5LdW1hckAyOG9uZS5jb20iLCJ1dGkiOiJDS1VfanJFT1dFaTgwQTktOFZZS0FRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2Z0ZCI6IkVwcDJIRnAxeDNqaWFSOURMbkpIRlNrcTJwSEh1d0pFOVZRMTFHTHhiZVVCYTI5eVpXRmpaVzUwY21Gc0xXUnpiWE0iLCJ4bXNfaWRyZWwiOiIxMCAxIn0.J0qAjOM2e_hfua_lMHqn4KrWUQivsLfQIqs0b6l-OK_FXJNQXTzRJAav1Tn5CDQJWnMKlBdG7kUru3_d9drgp3YY-xSmMFArX9LI613JrPCL9ZcppEEjDyP3NfCGxdi5i13AvmVMSFeT6oZwyEfO9DUwmsHiUnJL_IRe1wS6mIC7u2Qh-oOcQZc8CepFMfFA_lok6ZgxJI1iQNstvJh5a2a6EWv3S4O9wuwmU2igYvc42e6921Xf97eUaWWJieGqYXCpC28Yrndl64MA0c5_uwqba1HjrQsVZGkmXbiXsFzI6cb7TlWKuHrGUjb-3nqh2KPCcIw7BGB2SMuJsT7_Qw"
} 