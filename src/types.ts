export interface Config {
    started: string;
    firmware: string;
    uptime: string;
    model: string;
    original: number;
    WiFi_Hostname: string;
    WiFi_Mode: string;
    WiFi_Status: string;
    WiFi_IP: string;
    WiFi_GW: string;
    MQTT_status: string;
    WIFI_SSID: string;
    WIFI_password: string;
    IP_type: number;
    IP_ip: string;
    IP_mask: string;
    IP_gw: string;
    IP_dns: string;
    MQTT_enable: number;
    MQTT_hostname: string;
    MQTT_user: string;
    MQTT_password: string;
    MQTT_port: number;
    MQTT_topic: string;
    MQTT_keepalive: number;
    PORT_topic: string;
    PORT1_status: number;
    PORT2_status: number;
    PORT3_status: number;
    SENSOR_topic: string;
    SENSOR1_status: number;
    SENSOR1_type: number;
    SENSOR2_status: number;
    SENSOR2_type: number;
    SENSOR3_status: number;
    SENSOR3_type: number;
    SENSOR_cycle: number;
    SENSOR_minTimeChange: number;
    API_enable: number;
    API_key: string;
    HTTP_username: string;
    HTTP_password: string;
    WIFI_cycle: number;
    WIFI_retry: number;
    MQTT_retry: number;
}

export interface BoardConfig {
    ip: string;
    config?: Config;
}
