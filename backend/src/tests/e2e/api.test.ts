import request from 'supertest';
import { app } from '../../app';

describe('API E2E Tests', () => {
  describe('Health Check', () => {
    it('should return 200 for health check', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
    });
  });
});
