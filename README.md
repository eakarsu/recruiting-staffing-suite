# Recruiting Staffing Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIRecruitingAssistant`
- `AICandidateScreening`
- `AIInterviewScheduler`
- `AIStaffingAgencyCRM`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/recruiting-staffing-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4560`

Seeded users:
- `admin@recruiting-staffing.local / admin123`
- `manager@recruiting-staffing.local / manager123`
- `analyst@recruiting-staffing.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/recruiting-staffing-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4560 npm run smoke
```
