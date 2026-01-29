// Если есть historyApiFallback:
export default {
  server: {
    historyApiFallback: true  // ← Эта настройка ВСЕГДА возвращает index.html
  }
}