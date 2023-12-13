# openai-4.0

open ai 4.0.0 py


install :

pip install openai

npm install openai@^4.0.0

Authorization: Bearer OPENAI_API_KEY  to .env



curl https://api.openai.com/v1/models
  -H "Authorization: Bearer $OPENAI_API_KEY"
  -H "OpenAI-Organization: org-l74B16OhtCStEqa7MFc52h67"




Example with the `openai` Python package:

Upgrade to [Python SDK v1.2](https://github.com/openai/openai-python/tree/main#installation) with pip install --upgrade openai

```python

from openai import OpenAI

client = OpenAI(
  organization='org-l74B16OhtCStEqa7MFc52h67',
)
client.models.list()
```
