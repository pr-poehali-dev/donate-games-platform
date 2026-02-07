import json
from datetime import datetime

def handler(event: dict, context) -> dict:
    '''API для выдачи донатов на Free Fire и Grand Mobile'''
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method == 'POST':
        body_str = event.get('body', '{}')
        if not body_str or body_str == '':
            body_str = '{}'
        body = json.loads(body_str)
        
        game = body.get('game')
        player_id = body.get('playerId')
        donate_name = body.get('donateName')
        
        if not game or not player_id or not donate_name:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': False,
                    'error': 'Не указаны все необходимые данные'
                }),
                'isBase64Encoded': False
            }
        
        transaction_id = f"{game[:2].upper()}{datetime.now().strftime('%Y%m%d%H%M%S')}{player_id[:4]}"
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'transactionId': transaction_id,
                'game': game,
                'playerId': player_id,
                'donateName': donate_name,
                'message': f'Донат "{donate_name}" успешно отправлен на аккаунт {player_id}',
                'estimatedTime': '5-15 минут'
            }),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }